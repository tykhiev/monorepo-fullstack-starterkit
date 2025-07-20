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
RUN pnpm turbo prune @apps/web --docker

FROM base AS installer

RUN apk --no-cache add libc6-compat

WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN pnpm install --ignore-scripts --frozen-lockfile
COPY --from=builder /app/out/full/ .

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_NOVU_APP_ID

# Generate Prisma client for schema
RUN cd packages/database && npx prisma generate
# Build the application
RUN pnpm turbo run build --filter=@apps/web...

FROM base AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=installer /app/apps/web/.next/standalone ./
COPY --from=installer /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer /app/apps/web/public ./apps/web/public

# Change ownership
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "apps/web/server.js"]