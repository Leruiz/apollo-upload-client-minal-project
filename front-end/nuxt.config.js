const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    { src: '@/plugins/vue-apollo', ssr: false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/apollo'
  ],
/* 
  apollo: {
    clientConfigs: {
      default: {
        // required
        httpEndpoint: "http://localhost:3001/graphql"
      }
    }
  }, */

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['apollo-upload-client'],
    babel: {
      ignore: [/[\/\\]core-js/, /@babel[\/\\]runtime/],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-modules-commonjs'
      ]
    },
    extend(config, ctx) {
      // Run ESLint on save
    }
  },
}
