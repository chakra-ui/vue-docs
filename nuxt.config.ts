import { componentResolver } from '@chakra-ui/vue-auto-import';
import Components from 'unplugin-vue-components/vite';
import { siteLang, siteName } from './config/site-config';
import * as iconSet from './utils/icons';
import extendedTheme from './theme';

const { extendedIcons: extend, ...library } = iconSet;

export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: [
        '/',
        '/getting-started/**/*',
        '/styled-system/**/*',
        '/components/**/*',
        '/sitemap.xml'
      ]
    },
    serveStatic: true
  },
  app: {
    head: {
      title: siteName,
      htmlAttrs: {
        lang: siteLang
      }
    }
  },
  experimental: {
    componentIslands: true
  },
  // @ts-ignore
  chakra: {
    extendTheme: extendedTheme,
    icons: {
      library,
      extend
    }
  },
  // @ts-ignore
  modules: [
    '@nuxt/content',
    '~/modules/content-chunks.module.ts',
    '@chakra-ui/nuxt-next',
    '@nuxtjs/fontaine',
    '@nuxtjs/html-validator',
    '@nuxtjs/robots'
  ],
  fontMetrics: {
    fonts: [
      'DM Sans',
      {
        family: 'DM Sans',
        src: '@/styles/typography/files/dm-sans-all-400-normal.woff2'
      }
    ]
  },
  css: ['@/styles/typography/all.css', '~/styles/prism.scss'],
  content: {
    // documentDriven: true,
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
  },
  vite: {
    plugins: [
      Components({
        resolvers: [componentResolver]
      })
    ]
  }
});
