import { envConfig } from "./envConfig";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // server-side
    NUXT_AUTH_ORIGIN: envConfig.AUTH_ORIGIN,
    public: {
      // client-side
    }
  },
  build: {
    transpile: ["trpc-nuxt"]
  },
  modules: ["@sidebase/nuxt-auth", "@nuxtjs/eslint-module", "@pinia/nuxt"],
  auth: {
    origin: envConfig.AUTH_ORIGIN, // The origin is set to the development origin. Change this when deploying to production by setting `origin` in this config before build-time or by exporting `AUTH_ORIGIN` by running `export AUTH_ORIGIN=...`
    enableSessionRefreshPeriodically: false, // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
    enableSessionRefreshOnWindowFocus: true, // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableGlobalAppMiddleware: false, // Whether to add a global authentication middleware that will protect all pages without exclusion
    defaultProvider: undefined, // Select the default-provider to use when `signIn` is called. Setting this here will also effect the global middleware behavior: E.g., when you set it to `github` and the user is unauthorized, they will be directly forwarded to the Github OAuth page instead of seeing the app-login page
    addDefaultCallbackUrl: true, // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path.
    globalMiddlewareOptions: {
      // Configuration of the global auth-middleware (only applies if you set `enableGlobalAppMiddleware: true` above!)
      allow404WithoutAuth: true, // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
      addDefaultCallbackUrl: true // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path. Note: You also need to set the global `addDefaultCallbackUrl` setting to `false` if you want to fully disable this for the global middleware.
    }
  },
  eslint: {
    lintOnStart: false
  },
  typescript: {
    strict: true
    // shim: false,
    // typeCheck: "build",
  }
});
