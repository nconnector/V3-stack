# Vue + tRPC Fullstack Scaffolding

Use this project to kick off your End-to-End typesafe project with TRPC and Nuxt.

- Fast HMR (Vite)
- Typesafe API (TypeScript & tRPC)

## Client TODO:

- [x] Nuxt3, vite
- [ ] pinia
- [x] TRPC // trpc-nuxt wrapper

## Server TODO:

- [ ] prisma
- [x] TRPC // trpc-nuxt wrapper
- [ ] ts-eslint
- [ ] next auth // nuxt-auth wrapper
- [ ] configurable project name

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
npm i -D @sidebase/nuxt-auth
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
