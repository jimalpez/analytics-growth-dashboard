# GrowthPulse — Website Analytics & Lead Management Dashboard

A full-stack SaaS dashboard for tracking website traffic, managing leads, monitoring keyword rankings, and growing your business — built with the T3 Stack.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-6.6-2d3748?logo=prisma)
![tRPC](https://img.shields.io/badge/tRPC-11-398ccb?logo=trpc)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql)

---

## Overview

GrowthPulse is a modern analytics dashboard that provides:

- **Real-Time Analytics** — Page views, unique visitors, bounce rates, session durations, traffic sources, and geographic breakdowns
- **Lead Management** — Capture, track, and convert leads through a full pipeline (new → contacted → qualified → converted)
- **Keyword Tracking** — Monitor search engine rankings with position change indicators
- **Admin Panel** — User management with role-based access (admin, editor, user)
- **Dark/Light Mode** — System preference detection with manual toggle

The UI is fully functional with static mock data. The architecture is designed so that switching to real database queries requires only changing the API layer — no UI modifications needed.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **[Next.js](https://nextjs.org)** | 15.2.3 | React framework with App Router, server components, and file-based routing |
| **[TypeScript](https://typescriptlang.org)** | 5.8 | End-to-end type safety across client and server |
| **[TailwindCSS](https://tailwindcss.com)** | 4.0 | Utility-first CSS with the new v4 engine and CSS-based configuration |
| **[tRPC](https://trpc.io)** | 11.0 | Type-safe API layer — client queries are fully typed from server procedures |
| **[Prisma](https://prisma.io)** | 6.6 | Database ORM with PostgreSQL, schema-first design with migrations |
| **[PostgreSQL](https://postgresql.org)** | — | Relational database for all persistent data |
| **[React Query](https://tanstack.com/query)** | 5.69 | Server state management, caching, and data synchronization |
| **[Zod](https://zod.dev)** | 3.24 | Runtime schema validation for API inputs |
| **[SuperJSON](https://github.com/blitz-js/superjson)** | 2.2 | Serialization of Dates and other complex types over the wire |

### Why This Stack?

- **Next.js App Router** — Server components reduce client JavaScript; layouts and loading states are built in
- **tRPC** — No REST endpoint boilerplate; change a server procedure and the client gets type errors instantly
- **Prisma** — Database schema is the single source of truth; TypeScript types are generated automatically
- **TailwindCSS v4** — New CSS-native engine with `@theme` variables for design tokens and zero config
- **React Query via tRPC** — Automatic caching, background refetching, and optimistic updates

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, features, and call-to-action |
| `/login` | Login form (UI only) |
| `/signup` | Signup form (UI only) |
| `/dashboard` | Overview — stats cards, daily visits chart, traffic sources, recent leads, top keywords |
| `/analytics` | Detailed analytics — visits over time, traffic sources, top pages, visitors by country |
| `/leads` | Lead pipeline — status filters, full lead table with status badges |
| `/keywords` | Keyword rankings — position tracking with change indicators |
| `/profile` | User profile and account settings |
| `/admin/users` | Admin user management — add users, edit roles |

---

## Database Schema

Five models with full relations, indexes, and cascading deletes:

```
User ──< Website ──< Visit
                 ──< Lead
                 ──< Keyword
```

- **User** — `id`, `name`, `email` (unique), `role`, `createdAt`
- **Website** — `id`, `userId`, `domain`, `createdAt`
- **Visit** — `id`, `websiteId`, `page`, `referrer`, `country`, `createdAt`
- **Lead** — `id`, `websiteId`, `name`, `email`, `message`, `status`, `createdAt`
- **Keyword** — `id`, `websiteId`, `keyword`, `ranking`, `lastChecked`

---

## API Structure

Five tRPC routers returning mock data:

| Router | Procedures |
|---|---|
| `analytics` | `getStats`, `getVisits`, `getDailyVisits`, `getTrafficSources`, `getPageViews`, `getCountryData` |
| `leads` | `getAll`, `getStats`, `getByStatus`, `updateStatus` |
| `keywords` | `getAll`, `getStats` |
| `users` | `getAll`, `getCurrent`, `create`, `updateRole` |
| `websites` | `getAll` |

---

## Mock Data

Located in `src/lib/mock/`:

| File | Contents |
|---|---|
| `analytics.ts` | 15 visits, 7 traffic sources, 8 page views, 14 daily data points, 10 countries, aggregate stats |
| `leads.ts` | 10 leads across 5 statuses, pipeline stats |
| `keywords.ts` | 15 keywords with rankings and position changes, aggregate stats |
| `users.ts` | 8 users with 3 roles, current user profile |
| `websites.ts` | 4 websites |

---

## UI Components

Reusable, theme-aware components in `src/app/_components/`:

- **Sidebar** — Navigation with active state detection, theme toggle (light/dark/system), user profile link
- **StatsCard** — Metric display with trend percentage and icon
- **LineChart** — Interactive SVG area chart with hover tooltips, grid lines, and Y-axis labels
- **BarChart** — Horizontal bar chart with hover tooltips showing value and percentage
- **DataTable** — Generic typed table with sortable columns and row hover
- **StatusBadge** — Color-coded badge for lead status and user roles

---

## Dark/Light Mode

The theme system:

1. An **inline script** in the root layout reads `localStorage` before React hydrates — no flash of wrong theme
2. A **`useTheme` hook** (`src/hooks/use-theme.ts`) using `useSyncExternalStore` for hydration-safe state
3. **CSS custom properties** (`--th-*`) defined per theme in `globals.css`
4. Three modes: **Light**, **Dark**, **System** (auto-detects OS preference and responds to changes)

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL (or Docker)

### Setup

```bash
# Install dependencies
npm install

# Start PostgreSQL (Docker)
./start-database.sh

# Push schema to database
npx prisma db push

# Start dev server
npm run dev
```

The app runs at `http://localhost:3000`.

### Environment Variables

Copy `.env.example` to `.env`:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/analytics-growth-dashboard"
```

---

## Switching to Real Data

Each tRPC procedure has a `TODO` comment showing the Prisma query. To switch:

1. Ensure PostgreSQL is running and the schema is pushed
2. Replace mock returns with Prisma queries in `src/server/api/routers/`

```typescript
// Before (mock):
getVisits: publicProcedure.query(() => mockVisits),

// After (real):
getVisits: publicProcedure.query(({ ctx }) =>
  ctx.db.visit.findMany({ orderBy: { createdAt: "desc" } })
),
```

3. No UI changes required — tRPC infers types from the procedure return type

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npx prisma studio` | Open Prisma database GUI |
| `npx prisma db push` | Push schema to database |

---

## Project Structure

```
src/
├── app/
│   ├── (auth)/            # Login & signup pages
│   ├── (dashboard)/       # Dashboard pages with sidebar layout
│   │   ├── admin/users/   # Admin user management
│   │   ├── analytics/     # Analytics page
│   │   ├── dashboard/     # Main dashboard
│   │   ├── keywords/      # Keyword tracking
│   │   ├── leads/         # Lead management
│   │   ├── profile/       # User profile
│   │   └── layout.tsx     # Dashboard layout with sidebar
│   ├── _components/       # Shared UI components
│   ├── api/trpc/          # tRPC HTTP handler
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── hooks/
│   └── use-theme.ts       # Dark/light mode hook
├── lib/mock/              # Static mock data
├── server/
│   ├── api/
│   │   ├── routers/       # tRPC routers
│   │   ├── root.ts        # Root router
│   │   └── trpc.ts        # tRPC context and initialization
│   └── db.ts              # Prisma client
├── styles/
│   └── globals.css        # Tailwind config and theme variables
└── trpc/                  # Client-side tRPC setup
prisma/
└── schema.prisma          # Database schema
```

---

Built with [Create T3 App](https://create.t3.gg).
