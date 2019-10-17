import convertToAmp from './src/plugins/convertToAmp'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'canonical', href: '/' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'amphtml', href: '/amp' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/common.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  hooks: {
    'generate:page': (page) => {
      if (page.route === '/amp') {
        page.html = convertToAmp(page.html)
      }
    },
    'render:route': (url, page, { req, res }) => {
      if (page.route === '/amp') {
        page.html = convertToAmp(page.html)
      }
    }
  }
}
