# AGENTS.md

This file provides context for AI assistants working on this project.

## Project Overview

This is a company handbook built as a documentation website. It serves as a single source of truth for everything about how we work - company culture, processes, engineering practices, marketing, and reusable UI components.

The company is a small software development agency focused on building apps and websites for clients. We also maintain our own internal apps and tools.

## Tech Stack

- **Framework**: Next.js (App Router for new projects, some legacy uses Pages Router)
- **Documentation**: Fumadocs (fumadocs-core, fumadocs-ui, fumadocs-mdx)
- **Styling**: Tailwind CSS
- **UI**: Various - shadcn/ui, Radix UI, Base UI, Headless UI depending on project
- **Animation**: Motion (Framer Motion)
- **Language**: TypeScript
- **Package Manager**: npm (primary)

## Project Structure

```
/content/docs/          # Documentation content (MDX files)
  /company/             # Company info, culture, handbook meta
  /engineering/         # Engineering practices and tech docs
  /marketing-sales/     # Marketing and sales processes
  /ui/                  # Reusable UI component documentation
  /shoptet/             # Shoptet-specific docs

/src/
  /app/                 # Next.js app router pages
  /components/          # React components
  /config/              # Configuration files
  /lib/                 # Utility functions
  /registry/            # UI component registry
```

## Content Guidelines

### Writing Style

- Brief and straight to the point
- No filler phrases or corporate speak
- Occasionally witty but never cringe
- No emojis
- Practical and actionable
- Written for quick reference, not lengthy reading
- Technology-agnostic where possible (concepts over specific versions)

### MDX File Format

Every MDX file must start with frontmatter:

```mdx
---
title: "Page Title"
description: "Brief description of the page"
highlight: true  # Optional: highlights the page in navigation
---
```

### Folder Structure

Each folder can have a `meta.json` to control page ordering and folder metadata:

```json
{
  "title": "Section Name",
  "pages": ["page-one", "page-two"]
}
```

## Agency Tech Stack (What We Build With)

### Web Development
- Next.js (primary framework, App Router default)
- React
- TypeScript
- Tailwind CSS
- Various UI libraries (shadcn/ui, Radix, Base UI, Headless UI)

### Backend / CMS
- Headless WordPress (when needed)
- Strapi
- Custom APIs
- PHP/Laravel for some projects

### Forms & Validation
- react-hook-form or TanStack Form
- Zod for validation

### Deployment & Infrastructure
- Vercel (primary for Next.js apps)
- Railway (databases, backend services)
- Docker
- Raspberry Pi server (internal infrastructure)

### Development Tools
- Git with feature branch workflow (dev branch for staging in most projects)
- GitHub
- Zed editor (primary), Cursor, VS Code
- OrbStack (Docker management on Mac)
- Gemini (AI assistant via Google Workspace)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format with Prettier
```

## Important Notes

- Terminal basics are expected for all engineers
- Technology evolves quickly - focus on concepts over specific versions
- We work for clients most of the time, but also have our own apps
- Sometimes we continue developing clients' existing apps with their stack
- Docs should be written to stay relevant even when specific tools change