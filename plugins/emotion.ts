import { extractCritical } from '@emotion/server'
import { hydrate } from '@emotion/css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hook('app:rendered', (ctx) => {})
})
