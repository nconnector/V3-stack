# Nuxt-TRPC

## File structure

```.
├── server
│   ├── api
│   │   └── trpc
│   │       └── [trpc].ts  # <-- tRPC HTTP handler
│   │   └── [..]
│   ├── trpc
│   │   ├── routers
│   │   │   ├── index.ts  # <-- main app router
│   │   │   ├── todo.ts  # <-- sub routers
│   │   │   └── [..]
│   │   ├── context.ts   # <-- create app context
│   │   └── trpc.ts      # <-- procedure helpers
├── plugins
│   ├── client.ts  # <-- tRPC client plugin
└── [..]
```
