# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for Faithful Ventures, a software consulting company. The site is built with React 18, TypeScript, and Tailwind CSS, using Radix UI components for the design system.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### Framework and Structure
- **Next.js 15** with App Router (`app/` directory)
- **TypeScript** with strict configuration
- **Tailwind CSS** for styling with custom color palette
- **Radix UI** components for accessible UI primitives

### Key Directories
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
  - `components/ui/` - Radix UI-based design system components
  - `components/Navbar.tsx` and `components/Footer.tsx` - Layout components
- `lib/` - Utility functions and shared logic

### Design System
- Uses a component library built on Radix UI primitives
- Custom color scheme: Teal gradient (`#2BAA8E` to `#228F75`) with yellow accent (`#F4B400`)
- Tailwind utility classes combined with `cn()` helper from `lib/utils.ts`
- Geist font family (sans and mono) loaded via `next/font/google`

### Form Integration
- Uses **Formspree** (`@formspree/react`) for contact form handling
- No backend API - forms submit directly to Formspree

### Path Aliases
- `@/*` maps to project root for clean imports
- Example: `@/components/ui/button` instead of `../components/ui/button`

### State Management
- Uses React hooks (`useState`) for local component state
- No global state management library

## Code Style Guidelines

- Components use TypeScript with proper typing
- Tailwind classes combined using `cn()` utility
- Client components marked with `"use client"` directive when needed
- SEO metadata configured in `app/layout.tsx`
- Responsive design with mobile-first approach

## Key Features

- Responsive navigation with mobile menu
- Contact form integration with Formspree
- Multi-page structure (Home, About, Services, Portfolio, Contact, Privacy)
- External calendar booking integration
- Optimized fonts and images