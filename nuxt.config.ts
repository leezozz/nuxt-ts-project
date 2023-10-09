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
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  vue: {

  },
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs'
    ]
  },
  eslint: {
    emitWarning: false,
    emitError: false,
    lintOnStart: false
  },
  // 环境变量, .env.xxx 会覆盖此处设值
  runtimeConfig: {
    public: {
      baseApi: '',
      baseNotApi: ''
    }
  }
})
