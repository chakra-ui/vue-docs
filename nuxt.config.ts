export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hook('nitro:config', (config) => {
        // Prevent inlining emotion (+ the crucial css cache!) in dev mode
        if (nuxt.options.dev) {
          if (config.externals) {
            config.externals.external ||= []
            config.externals.external.push('@emotion/server')
          }
        }
      })
    },
    '~/modules/chakra.module.ts'
  ],
  build: {
    // @ts-ignore
    extend (config: { resolve: { alias: { vue$: string } } }, _ctx: any) {
      config.resolve.alias.vue$ = 'vue/dist/vue.esm-browser.js'
    }
  },
  plugins: ['~/plugins/chakra.ts'],
  css: ['~/styles/fonts.scss', '~/styles/prism.scss'],
  content: {
    documentDriven: true,
    markdown: {
      toc: { depth: 5, searchDepth: 3 },
      // anchorLinks: true,
      remarkPlugins: ['remark-prism'],
      rehypePlugins: [
        'rehype-prism-plus',
        [
          'rehype-autolink-headings',
          {
            behavior: 'append',
            test: ['h2', 'h3', 'h4'],
            properties: { className: ['anchor'] }
          }
        ]
      ]
    }
  }
})
