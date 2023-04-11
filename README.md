# Vue + tRPC Fullstack Scaffolding

Use this project to kick off your End-to-End typesafe project with TRPC and Nuxt.

- Fast HMR (Vite)
- Typesafe API (TypeScript & tRPC)

## File structure

```.
├── server
│   ├── api
│   │   ├── trpc
│   │   │   └── [trpc].ts  # <-- tRPC HTTP handler
│   │   └── auth
│   │       └── [...].ts  # <-- catch all auth HTTP handler
│   │── middleware
│   │       └── 0.auth-session.ts  # <-- first in order, add auth session to ctx
│   └── trpc
│       ├── trpc.ts      # <-- procedure helpers
│       ├── context.ts   # <-- create app context
│       ├── router.ts  # <-- main app router
│       └── routers  # <-- sub-routers
│           ├── auth.ts
│           └── [..]
├── plugins
│   └── client.ts  # <-- tRPC client plugin
```

## Client TODO:

- [x] Nuxt3, vite
- [ ] pinia
- [x] TRPC // trpc-nuxt wrapper
- [x] env

## Server TODO:

- [ ] prisma
- [x] TRPC // trpc-nuxt wrapper
- [ ] ts-eslint
- [x] next auth // nuxt-auth wrapper
- [ ] auth0
- [ ] env.example

## Deployment:

- TRPC implemented via nuxt-trpc
- Nuxt builds /server and /cliend https://nuxt.com/docs/getting-started/deployment

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

```
npx nuxi init project-name
npm i
npm i @trpc/server @trpc/client trpc-nuxt zod
npm i -D @sidebase/nuxt-auth @types/node
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
