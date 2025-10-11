# Faithful Ventures - Next.js Application

## Project Overview

Faithful Ventures is a Next.js-based website application designed for a software consulting and development company. The application features a modern, responsive design built with Tailwind CSS and the shadcn/ui component library. It includes multiple service pages, a portfolio section, and contact information, with a focus on providing innovative software solutions.

### Key Technologies

- **Next.js 15.1.0** - React-based framework for production applications
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe programming language for JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components built with Radix UI and Tailwind CSS
- **Lucide React** - Icon library for React
- **Geist Font** - Modern font family from Vercel

### Architecture

The application follows the Next.js App Router pattern with:
- `app/` directory containing page routes
- `components/` directory for shared UI components
- `lib/` directory for utility functions
- `hooks/` directory for custom React hooks

## Building and Running

### Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This will start the development server at http://localhost:3000

### Production Build
```bash
npm run build
```

### Production Start
```bash
npm run start
```

### Linting
```bash
npm run lint
```

## Project Structure

```
/Users/noahsheldon/Documents/Work_Projects/faithful-ventures/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── services/          # Services pages
│       └── web-development/page.tsx
├── components/            # UI components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx        # Navigation component
│   └── Footer.tsx        # Footer component
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── components.json       # shadcn/ui configuration
└── app/globals.css      # Global styles
```

## Key Features

1. **Responsive Design** - Fully responsive layout that works on mobile, tablet, and desktop devices
2. **Dark Mode Support** - Automatic dark/light mode based on system preferences
3. **Modern UI Components** - Built with shadcn/ui components for consistent design
4. **SEO Optimized** - Proper metadata, Open Graph tags, and semantic HTML
5. **Performance Optimized** - Utilizes Next.js performance features and lazy loading

## Development Conventions

- Uses TypeScript for type safety
- Follows Next.js best practices and conventions
- Leverages Tailwind CSS for styling with custom configuration
- Component-based architecture with shadcn/ui
- CSS variables for theming (defined in globals.css)
- Absolute imports using @/ alias (defined in tsconfig.json)

## Routing

The application uses the Next.js App Router:
- `/` - Homepage with hero section, services, about, testimonials
- `/services/web-development` - Detailed web development service page
- `/about` - About page (assumed, linked from homepage)
- `/portfolio` - Portfolio page (linked from web development page)
- `/contact` - Contact page (linked from web development page)

## Styling

The application uses:
- Tailwind CSS for utility-first styling
- CSS variables for theming (defined in globals.css)
- Dark mode support using Tailwind's dark: prefix
- Custom animations and transitions for interactive elements
- Responsive breakpoints following Tailwind's conventions

## Component Library

The project uses shadcn/ui components, including:
- Button
- Card (Card, CardHeader, CardTitle, CardContent)
- Various Radix UI components (Accordion, Dialog, Select, etc.)

## Environment

The project is built for deployment on Vercel and supports various hosting platforms. It's optimized for performance and includes features like:
- Image optimization
- Font optimization (Geist fonts)
- Bundle optimization
- Server-side rendering (SSR) and static site generation (SSG) capabilities

## Contact Information

- Email: info@faithfulvc.xyz
- Calendar: https://calendar.app.google/a9nebr5GxsShHSNy7