// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/budget2travel.svg" },
      ],
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
});
