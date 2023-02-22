<script setup lang="ts">
import { CFlex, CText } from "@chakra-ui/vue-next"

import VueLogo from "./VueLogo.vue";

defineProps<{
  content: string
  to: string
  ariaLabel?: string
}>()

const NuxtLink = resolveComponent('nuxt-link')
</script>

<template>
  <CFlex
    :as="NuxtLink"
    prefetch
    :to="to"
    :aria-label="ariaLabel"
    :h="['100%', '200px']"
    :flex-dir="['column', 'row']"
    border="1px solid"
    border-color="gray.100"
    border-radius="lg"
    overflow="hidden"
    transition="box-shadow 0.1s ease-out 0s"
    :_hover="{ shadow: 'md', textDecoration: 'none' }"
  >
    <CFlex :w="['100%', '200px']" :h="['200px', '100%']" justify-content="center" align-items="center" overflow="hidden" bg="gray.100" :p="[0, 5]" flex-shrink="0">
      <slot name="img">
        <VueLogo />
      </slot>
    </CFlex>
    <CFlex p="5" flex-dir="column">
      <CHeading>
        <slot name="title" />
      </CHeading>
      <CText>
        <slot name="description" />
      </CText>
    </CFlex>
  </CFlex>
</template>