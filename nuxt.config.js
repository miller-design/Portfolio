export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e22800' },

  /*
  ** Global CSS
  */
 css: [
    { src: '@/assets/scss/app.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
  ],

/*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    // ['storyblok-nuxt', {
    //   accessToken: process.env.SB_API_KEY,
    //   cacheProvider: 'memory'
    // }]
  ],
  styleResources: {
    scss: [
      '~/node_modules/include-media/dist/_include-media.scss',
      '~/assets/scss/config/_variables.scss',
      '~/assets/scss/config/_mixins.scss',
      '~/assets/scss/config/_type.scss',
      '~/assets/scss/config/_grid.scss',
    ]
  },

  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 700],
    }
  },

  /*
  ** Build configuration
  */
  build: {
    splitChunks: {
      layouts: true
    },
    extractCss: true,
    scss: {
      includePaths: ['~/assets/scss']
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'autoprefixer': {},
        'postcss-custom-properties': false
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    // postcss: [
    //   require('autoprefixer')({
    //     overrideBrowserslist: [">0.3%", "not ie 11", "not dead", "not op_mini all"]
    //   })
    // ],
    minifyCSS: true,
    minifyJS: false,
    extend (config, ctx) {
      if (ctx.isClient) {
        //
      }
    }
  },
  generate: {
    fallback: true // if you want to use '404.html' instead of the default '200.html'
    //fallback: 'my-fallback/file.html' // if your hosting needs a custom location
  },
  env: {
    // SB_API_KEY: process.env.SB_API_KEY
  }
}
