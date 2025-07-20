# 🚀 API Server

A high-performance API server built with Hono.js, featuring authentication, OpenAPI documentation, and modern TypeScript practices.

## ✨ Features

- **⚡ Fast & Lightweight**: Built with Hono.js for optimal performance
- **📚 OpenAPI Documentation**: Auto-generated API docs with Scalar
- **🔐 Authentication**: Integrated with Better Auth for secure user management
- **🗄️ Database Integration**: Type-safe database operations with Prisma
- **📝 Logging**: Structured logging with Pino
- **🔄 CORS Support**: Cross-origin resource sharing enabled
- **🎯 Type Safety**: Full TypeScript coverage with strict type checking
- **🌍 Environment Validation**: Runtime environment validation with t3-env
- **💾 Redis Integration**: Session storage and caching support

## 🏗️ Architecture

```
src/
├── common/
│   ├── const/           # Constants and configuration
│   ├── exception/       # Custom exception handlers
│   ├── libs/           # External library configurations
│   ├── pipes/          # Validation pipes
│   ├── server/         # Server factory and utilities
│   └── types/          # Shared type definitions
├── middlewares/        # Request/response middleware
├── modules/           # Feature modules
│   ├── auth/          # Authentication routes
│   └── openapi/       # OpenAPI documentation
├── env.ts             # Environment configuration
└── index.ts           # Application entry point
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- PostgreSQL database
- Redis server
- Environment variables configured

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Environment Variables

Create a `.env` file in the `apps/api` directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/database"

# Redis
REDIS_URL="redis://localhost:6379"

# Auth
AUTH_SECRET="your-secret-key"
AUTH_URL="http://localhost:4000"

# API Configuration
API_PORT="4000"
NODE_ENV="development"

# Email (for auth)
RESEND_API_KEY="your-resend-key"
```

## 📚 API Documentation

Once the server is running, you can access:

- **OpenAPI Specs**: `http://localhost:4000/openapi/specs`
- **Interactive Docs**: `http://localhost:4000/docs`

## 🔧 Available Endpoints

### Authentication Routes (`/api/auth`)

- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout
- `GET /api/auth/session` - Get current session
- `POST /api/auth/verify` - Verify email address

### Static Files

- `GET /public/*` - Serve static files

## 🛠️ Development

### Adding New Routes

1. Create a new module in `src/modules/`
2. Define your routes with proper OpenAPI documentation
3. Register the routes in `src/index.ts`

Example:

```typescript
// src/modules/users/users.route.ts
import { OpenAPIHono } from '@hono/zod-openapi'
import { z } from 'zod'

const app = new OpenAPIHono()

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
})

app.openapi(
  {
    method: 'get',
    path: '/users',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: z.array(UserSchema),
          },
        },
        description: 'List of users',
      },
    },
  },
  async (c) => {
    // Your route logic here
    return c.json([])
  }
)

export { app as usersRoute }
```

### Middleware

The API uses several middleware layers:

- **CORS**: Cross-origin resource sharing
- **Logging**: Request/response logging with Pino
- **Session**: Session management and validation
- **Validation**: Request validation with Zod

### Error Handling

Custom exception handling is implemented in `src/common/exception/`:

- `ValidationException` - For validation errors
- `NotFoundException` - For resource not found
- `UnauthorizedException` - For authentication errors

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## 🚀 Deployment

### Production Build

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Docker Deployment

```dockerfile
FROM oven/bun:1 as base
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1-slim
WORKDIR /app

COPY --from=base /app/dist ./dist
COPY --from=base /app/package.json ./

EXPOSE 4000
CMD ["bun", "run", "start"]
```

## 📊 Monitoring

The API includes built-in monitoring capabilities:

- **Health Check**: `GET /health`
- **Metrics**: Request/response metrics
- **Logging**: Structured JSON logging
- **Error Tracking**: Comprehensive error handling

## 🔒 Security

- **CORS**: Configured for secure cross-origin requests
- **Rate Limiting**: Built-in rate limiting (configurable)
- **Input Validation**: All inputs validated with Zod
- **Authentication**: Secure session management
- **Environment Variables**: Runtime validation

## 🤝 Contributing

1. Follow the existing code structure
2. Add proper TypeScript types
3. Include OpenAPI documentation for new endpoints
4. Add tests for new functionality
5. Update this README if needed

## 📄 License

This project is licensed under the MIT License. 