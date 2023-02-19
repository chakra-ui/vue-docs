import { siteLang, siteName } from './config/site-config';
import * as iconSet from './utils/icons';
import extendedTheme from './theme';

const { extendedIcons: extend, ...library } = iconSet;

export default defineNuxtConfig({
  app: {
    head: {
      title: siteName,
      htmlAttrs: {
        lang: siteLang
      }
    }
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
    '@chakra-ui/nuxt-next'
  ],
  plugins: ['~/plugins/typography.ts'],
  css: ['~/styles/fonts.scss', '~/styles/prism.scss'],
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
  }
});
