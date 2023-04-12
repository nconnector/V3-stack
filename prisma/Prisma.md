# Prisma

## Setup

1. init schema: `npx prisma init --datasource-provider postgresql`
2. model schema or `npx prisma db pull` existing
3. create first migration `npx prisma migrate dev --name init` & auto-generate client
4. reset and seed db `npm run db-reset`
5. prisma is ready to run queries
