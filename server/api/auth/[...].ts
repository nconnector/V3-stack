
import GithubProvider from "next-auth/providers/github";
import Auth0Provider from "next-auth/providers/auth0";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NuxtAuthHandler } from "#auth";
import { envConfig } from "~/envConfig";
import { prisma } from "~/server/prisma";

export default NuxtAuthHandler({
  adapter: PrismaAdapter(prisma),
  secret: envConfig.AUTH_NUXT_SECRET, // secret needed to run nuxt-auth in production mode (used to encrypt data)
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      // https://github.com/settings/developers
      clientId: envConfig.AUTH_GITHUB_CLIENT_ID,
      clientSecret: envConfig.AUTH_GITHUB_CLIENT_SECRET
    }),

    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      // https://manage.auth0.com/dashboard
      clientId: envConfig.AUTH_AUTH0_CLIENT_ID,
      clientSecret: envConfig.AUTH_AUTH0_CLIENT_SECRET,
      issuer: envConfig.AUTH_AUTH0_ISSUER
    })
  ]
});
