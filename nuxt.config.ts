import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/styles/main.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
    server: {
      origin: "http://localhost:3000",
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_consts.scss" as *;',
        },
      },
    },
  },
});
