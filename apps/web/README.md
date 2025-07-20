# 🌐 Web Application

A modern, responsive web application built with Next.js 15, React 19, and Tailwind CSS, featuring a comprehensive UI component library and seamless authentication integration.

## ✨ Features

- **⚡ Next.js 15**: Latest features with App Router and React Server Components
- **🎨 Modern UI**: Beautiful, responsive design with Tailwind CSS
- **🧩 Component Library**: 50+ pre-built UI components from shadcn/ui
- **🔐 Authentication**: Seamless integration with Better Auth
- **📱 Responsive**: Mobile-first design approach
- **🌙 Dark Mode**: Built-in dark/light theme support
- **🎯 Type Safety**: Full TypeScript coverage
- **⚡ Performance**: Optimized for speed with Next.js optimizations
- **♿ Accessibility**: WCAG compliant components
- **🔍 SEO Ready**: Built-in SEO optimizations

## 🏗️ Architecture

```
src/
├── app/                 # Next.js App Router
│   ├── (auth)/         # Authentication routes
│   ├── (dashboard)/    # Dashboard routes
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Page-specific components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── providers/         # Context providers
└── types/             # TypeScript type definitions
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm package manager
- API server running (see `apps/api`)

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

# Run linting
pnpm lint
```

### Environment Variables

Create a `.env.local` file in the `apps/web` directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:4000"

# Authentication
NEXT_PUBLIC_AUTH_URL="http://localhost:4000/api/auth"

# App Configuration
NEXT_PUBLIC_APP_NAME="Your App Name"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 🎨 UI Components

The web app uses a comprehensive component library built on shadcn/ui and Radix UI:

### Available Components

- **Layout**: Sidebar, Navigation, Breadcrumb, Separator
- **Forms**: Input, Button, Select, Checkbox, Radio, Switch
- **Feedback**: Alert, Toast, Progress, Skeleton, Badge
- **Data Display**: Table, Card, Avatar, Badge, Typography
- **Navigation**: Menu, Tabs, Pagination, Breadcrumb
- **Overlay**: Dialog, Popover, Tooltip, Hover Card
- **Interactive**: Accordion, Collapsible, Carousel, Stepper

### Using Components

```tsx
import { Button } from "@packages/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@packages/ui/card"

export default function ExamplePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## 🔐 Authentication

The web app integrates seamlessly with the Better Auth system:

### Authentication Flow

1. **Sign Up**: User registration with email verification
2. **Sign In**: Secure login with session management
3. **Session Management**: Automatic session refresh
4. **Protected Routes**: Route protection with middleware
5. **User Profile**: User profile management

### Using Authentication

```tsx
import { useAuth } from "@packages/auth/client"

export default function ProfilePage() {
  const { user, signOut } = useAuth()

  if (!user) {
    return <div>Please sign in</div>
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
```

## 📱 Responsive Design

The application is built with a mobile-first approach:

### Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Responsive Utilities

```tsx
import { useMobile } from "@packages/ui/hooks/use-mobile"

export default function ResponsiveComponent() {
  const isMobile = useMobile()

  return (
    <div className={isMobile ? "p-4" : "p-8"}>
      {isMobile ? "Mobile Layout" : "Desktop Layout"}
    </div>
  )
}
```

## 🎯 Performance Optimization

### Next.js Optimizations

- **Image Optimization**: Automatic image optimization with `next/image`
- **Font Optimization**: Optimized font loading with `next/font`
- **Code Splitting**: Automatic code splitting and lazy loading
- **Static Generation**: Static site generation where possible
- **Edge Runtime**: Edge functions for better performance

### Performance Best Practices

```tsx
// Optimized image loading
import Image from "next/image"

<Image
  src="/hero-image.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
  className="rounded-lg"
/>

// Dynamic imports for code splitting
import dynamic from "next/dynamic"

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div>Loading...</div>,
})
```

## 🌙 Theme Support

Built-in dark mode support with system preference detection:

### Theme Configuration

```tsx
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Using Themes

```tsx
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  )
}
```

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Docker Deployment

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm && pnpm build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

## 📊 Analytics & Monitoring

### Built-in Analytics

- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Automatic error reporting
- **User Analytics**: Page views and user behavior
- **SEO Monitoring**: Search engine optimization metrics

## 🔒 Security

- **Content Security Policy**: Built-in CSP headers
- **HTTPS Only**: Secure connections in production
- **Input Validation**: Client-side validation with Zod
- **XSS Protection**: Automatic XSS protection
- **CSRF Protection**: Built-in CSRF protection

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for all new code
3. Follow the component library patterns
4. Add proper tests for new features
5. Update this README if needed

## 📄 License

This project is licensed under the MIT License.
