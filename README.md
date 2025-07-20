# 🚀 Fullstack Monorepo Starterkit

A modern, production-ready fullstack application starterkit built with TypeScript, featuring a monorepo architecture powered by Turborepo, Bun, and pnpm.

## ✨ Features

- **🏗️ Monorepo Architecture**: Organized with Turborepo for efficient builds and development
- **⚡ High Performance**: Built with Bun runtime for faster development and builds
- **🔐 Authentication**: Complete auth system with Better Auth, supporting multiple providers
- **🗄️ Database**: PostgreSQL with Prisma ORM and automatic schema generation
- **🎨 UI Components**: Comprehensive shadcn/ui component library with Tailwind CSS
- **📱 Modern Frontend**: Next.js 15 with React 19 and App Router
- **🔧 API Backend**: Hono.js API with OpenAPI documentation
- **📝 Type Safety**: Full TypeScript coverage with shared type configurations
- **🎯 Code Quality**: Biome for linting and formatting, Husky for git hooks
- **🚀 Production Ready**: Optimized for deployment with proper caching and build pipelines

## 🏗️ Architecture

```
monorepo-fullstack-starterkit/
├── apps/
│   ├── api/          # Hono.js API server
│   └── web/          # Next.js frontend application
├── packages/
│   ├── auth/         # Authentication service
│   ├── database/     # Database client and schema
│   ├── ts-config/    # Shared TypeScript configurations
│   └── ui/           # Shared UI component library
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm 9.14.0+
- PostgreSQL database
- Redis (for session storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd monorepo-fullstack-starterkit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database and auth configuration
   ```

4. **Set up the database**
   ```bash
   pnpm db:generate
   pnpm db:push
   pnpm db:seed
   ```

5. **Start development servers**
   ```bash
   pnpm dev
   ```

## 📦 Available Scripts

### Root Level
- `pnpm dev` - Start all development servers
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages and apps
- `pnpm format` - Format code with Biome
- `pnpm check-types` - Type check all packages

### Package Specific
- `pnpm api` - Run API-specific commands
- `pnpm web` - Run web-specific commands
- `pnpm ui` - Run UI package commands
- `pnpm auth` - Run auth package commands
- `pnpm db` - Run database commands

## 🏛️ Project Structure

### Apps

#### `apps/api` - Backend API Server
- **Framework**: Hono.js with Node.js server
- **Features**: 
  - OpenAPI documentation with Scalar
  - Authentication routes
  - Middleware for logging, CORS, and sessions
  - Redis integration for caching
  - Environment validation with t3-env

#### `apps/web` - Frontend Application
- **Framework**: Next.js 15 with App Router
- **Features**:
  - React 19 with modern features
  - Tailwind CSS for styling
  - Shared UI components
  - Authentication integration
  - Type-safe API calls

### Packages

#### `packages/auth` - Authentication Service
- **Framework**: Better Auth
- **Features**:
  - Multiple authentication providers
  - Email verification
  - Session management
  - User management
  - Organization support

#### `packages/database` - Database Layer
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Features**:
  - Type-safe database client
  - Automatic schema generation
  - Zod validation integration
  - Pagination support
  - Seeding utilities

#### `packages/ui` - UI Component Library
- **Framework**: shadcn/ui with Radix UI
- **Styling**: Tailwind CSS
- **Features**:
  - 50+ pre-built components
  - Dark mode support
  - Responsive design
  - Accessibility focused
  - Customizable themes

#### `packages/ts-config` - TypeScript Configuration
- **Purpose**: Shared TypeScript configurations
- **Features**:
  - Base configuration
  - Hono.js specific config
  - React library config
  - Consistent type checking across packages

## 🔧 Development

### Adding New Packages
```bash
# Create a new package
mkdir packages/my-package
cd packages/my-package
pnpm init
```

### Adding New Apps
```bash
# Create a new app
mkdir apps/my-app
cd apps/my-app
pnpm init
```

### Database Migrations
```bash
# Generate a new migration
pnpm db:migrate:dev --name migration_name

# Apply migrations
pnpm db:migrate:deploy

# Reset database (development only)
pnpm db:migrate:reset
```

## 🚀 Deployment

### Environment Variables
Required environment variables for production:

```env
# Database
DATABASE_URL="postgresql://..."

# Redis
REDIS_URL="redis://..."

# Auth
AUTH_SECRET="your-secret-key"
RESEND_API_KEY="your-resend-key"

# API
API_PORT="4000"
NODE_ENV="production"
```

### Build for Production
```bash
# Build all packages and apps
pnpm build

# Start production servers
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Open an issue on GitHub
- Check the documentation in each package
- Review the example implementations

---

Built with ❤️ using modern web technologies
