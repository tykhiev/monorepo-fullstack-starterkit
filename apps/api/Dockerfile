# Use Node.js as the base image
FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install --global corepack@latest
RUN corepack enable
RUN pnpm install -g turbo@2.3.4

FROM base AS builder

WORKDIR /app
COPY . .
RUN pnpm turbo prune @apps/api --docker

FROM base AS installer

RUN apk --no-cache add ca-certificates wget
# Install glibc to run Bun on both x86_64 and aarch64
RUN if [[ $(uname -m) == "aarch64" ]] ; \
    then \
    # aarch64
    wget https://raw.githubusercontent.com/squishyu/alpine-pkg-glibc-aarch64-bin/master/glibc-2.26-r1.apk ; \
    apk add --no-cache --allow-untrusted --force-overwrite glibc-2.26-r1.apk ; \
    rm glibc-2.26-r1.apk ; \
    else \
    # x86_64
    wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.28-r0/glibc-2.28-r0.apk ; \
    wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub ; \
    apk add --no-cache --force-overwrite glibc-2.28-r0.apk ; \
    rm glibc-2.28-r0.apk ; \
    fi

RUN npm install -g bun

WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN pnpm install --ignore-scripts --frozen-lockfile
COPY --from=builder /app/out/full/ .
ENV NODE_ENV=production

# Generate Prisma client
RUN cd packages/database && npx prisma generate

# Build the application
RUN pnpm turbo run build --filter=@apps/api...

RUN cd packages/auth && pnpm tsup --env.NODE_ENV production

RUN cd apps/api && bun run build.config.ts

# list folder for debugging
RUN ls -la /app/apps/api/dist

FROM base AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

# Copy the entire apps/api directory to ensure all necessary files are included
COPY --from=installer /app/apps/api ./apps/api
COPY --from=installer /app/apps/api/dist /app/apps/api/dist
COPY --from=installer /app/packages/database/generated ./packages/database/generated
COPY --from=installer /app/packages/database/prisma ./packages/database/prisma
COPY --from=installer /app/packages/auth/dist ./packages/auth/dist

# Change ownership
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
ENV NODE_ENV=production
USER nodejs

EXPOSE 4000

# Run migrations and start the application
CMD ["/bin/sh", "-c", "cd packages/database && npx prisma migrate deploy && cd ../../apps/api && node dist/index.js"]
