// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  devServer: {
    port: 3333
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt'
  ],
  vue: {

  },
  eslint: {
    emitWarning: false,
    emitError: false,
    lintOnStart: false
  }
})
