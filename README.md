# Vue + tRPC Fullstack Scaffolding

Use this project to kick off your End-to-End typesafe project with TRPC and Nuxt.

- Fast HMR (Vite)
- Typesafe API (TypeScript & tRPC)

## Features

- [x] Vue3 / Nuxt 3
- [x] Typescript
- [ ] ts-eslint
- [x] Prisma ORM # https://www.prisma.io/
- [ ] Pinia state management
- [x] tRPC API # https://trpc.io/
- [x] Nuxt Auth # https://sidebase.io/nuxt-auth/
- [x] Vite

## File structure

```.
├── server
│   ├── api
│   │   ├── trpc
│   │   │   └── [trpc].ts             <-- tRPC HTTP handler
│   │   └── auth
│   │       └── [...].ts              <-- catch all auth HTTP handler
│   ├── middleware
│   │       └── 0.auth-session.ts     <-- first in order, add auth session to event ctx
│   ├── trpc
│   │   ├── trpc.ts                   <-- procedure helpers
│   │   ├── context.ts                <-- create app context
│   │   ├── router.ts                 <-- main app router
│   │   └── routers                   <-- sub-routers
│   │       ├── user.ts
│   │       └── [..]
│   └── prisma.ts                     <-- prisma client
├── prisma
│   ├── migrations
│   │       └── [..]
│   ├── schema.prisma
│   └── seed.ts
├── plugins
│   └── client.ts  # <-- tRPC client plugin
```

## Deployment:

- TRPC implemented via nuxt-trpc
- Nuxt builds /server and /client https://nuxt.com/docs/getting-started/deployment

## Setup

### From this template:

```
npm i
```

### From scratch:

```
npx nuxi init v3-project-name
npm i
npm i @trpc/server @trpc/client trpc-nuxt zod @next-auth/prisma-adapter
npm i -D @sidebase/nuxt-auth @types/node prisma

```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
