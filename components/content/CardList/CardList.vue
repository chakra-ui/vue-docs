<script setup lang="ts">
import { CBox, CFlex, CText } from "@chakra-ui/vue-next"

const NuxtLink = resolveComponent('nuxt-link')
</script>

<template>
  <CFlex
  as="section"
  :flex-dir="['column', 'column', 'column', 'row']"
  align="center"
  gap="6"
  font-family="body"
  mt="6"
> 
  <CFlex
    :as="NuxtLink"
    prefetch
    to="/getting-started/installation"
    aria-label="Chakra UI Vue getting started with Vue 3"
    flex-dir="column"
    border="1px solid"
    border-color="gray.100"
    border-radius="lg"
    overflow="hidden"
    transition="box-shadow 0.1s ease-out 0s"
    :_hover="{ shadow: 'md', textDecoration: 'none' }"
  >
    <CBox h="200px" w="200px" overflow="hidden" bg="gray.100" p="5">
      <img src="~/assets/vue-logo.png" alt="Vue logo" lazy="true" />
    </CBox>
    <CText
      p="5"
      mx="auto"
    >
      Vue 3
    </CText>
  </CFlex>
  <CFlex
    :as="NuxtLink"
    prefetch
    to="/frameworks/nuxt-3"
    aria-label="Chakra UI Vue getting started with Vue 3"
    flex-dir="column"
    border="1px solid"
    border-color="gray.100"
    border-radius="lg"
    overflow="hidden"
    transition="box-shadow 0.1s ease-out 0s"
    :_hover="{ shadow: 'md', textDecoration: 'none' }"
  >
    <CBox h="200px" w="200px" overflow="hidden" bg="gray.100" p="5">
      <img src="~/assets/nuxt-logo.png" alt="Vue logo" lazy="true" />
    </CBox>
    <CText
      p="5"
      mx="auto"
    >
      Nuxt 3
    </CText>
  </CFlex>
</CFlex>
</template>