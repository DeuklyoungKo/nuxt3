import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: '123',
        NUXT_API_SECRET:process.env.NUXT_API_SECRET,
        NUXT_PUBLIC_BASE_URL:process.env.NUXT_PUBLIC_BASE_URL,
        // Keys within public, will be also exposed to the client-side
        public: {
          apiBase: '/api',
          apiSecret2: '456',
        }
      }
})


