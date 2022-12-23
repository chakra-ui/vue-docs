import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    // Usually  npm package name of your module
    name: '@chakra-ui/nuxt-module',
    // The key in `nuxt.config` that holds your module options
    configKey: 'chakra',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  setup (_moduleOptions, nuxt) {
    nuxt.hook('builder:generateApp', (_app) => {})
  }
})
