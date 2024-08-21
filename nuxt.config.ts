// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // enable server-side rendering here
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/icon', '@nuxtjs/i18n'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        icon: 'cif:gb',
        file: 'en-US.json',
      },
      {
        code: 'lo',
        name: 'ພາສາລາວ',
        icon: 'cif:la',
        file: 'lo-LA.json',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'lo',
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  compatibilityDate: '2024-08-21',
});
