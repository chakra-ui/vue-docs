<script lang="ts" setup>
import {
  chakra,
  CText,
  CButton,
  CStack,
  CSimpleGrid,
  CHeading,
  CContainer
} from '@chakra-ui/vue-next'
definePageMeta({
  layout: 'home'
})
const NuxtLink = resolveComponent('nuxt-link')
</script>

<template>
  <chakra.main py="10">
    <c-container max-w="6xl">
      <c-simple-grid :columns="[1, null, 2]" spacing="40px">
        <c-stack spacing="6" align-items="flex-start">
          <c-heading as="h1" font-size="6xl" font-weight="extrabold">
            Create accessible Vue 3 apps with speed
          </c-heading>
          <c-text font-size="xl" color="subtitleText">
            Chakra UI Vue is a simple, modular and accessible component
            library that gives you the building blocks you need to build
            your Vue applications.
          </c-text>
          <!-- <nuxt-link to="/getting-started" #="{ , navigate }"> -->
          <c-button
            :as="NuxtLink"
            to="/getting-started"
            size="lg"
            justify-self="flex-start"
            color-scheme="emerald"
            right-icon="arrow-right"
            rounded="full"
            :_hover="{ textDecoration: 'none' }"
          >
            Get Started
          </c-button>
          <!-- </nuxt-link> -->
        </c-stack>

        <chakra.div>
          <!-- Empty -->
        </chakra.div>
      </c-simple-grid>
    </c-container>
  </chakra.main>
</template>
