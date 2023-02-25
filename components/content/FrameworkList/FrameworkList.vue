<script setup lang="ts">
import { CFlex } from "@chakra-ui/vue-next"
import FrameworkCard from "./FrameworkCard.vue";

import VueLogo from "./VueLogo.vue";
import NuxtLogo from "./NuxtLogo.vue";
</script>

<template>
<CFlex
  as="section"
  flex-dir="column"
  gap="6"
  font-family="body"
  mt="6"
> 
  <FrameworkCard content="Vue 3" to="/getting-started/installation" aria-label="Chakra UI Vue getting started with Vue 3">
    <template #img>
      <VueLogo />
    </template>
    <template #title>
      Vue 3
    </template>
    <template #description>
      The Progressive JavaScript Framework.
      An approachable, performant and versatile framework for building web user interfaces.
    </template>
  </FrameworkCard>
  <FrameworkCard content="Nuxt 3" to="/frameworks/nuxt-3" aria-label="Chakra UI Vue getting started with Nuxt 3">
    <template #img>
      <NuxtLogo />
    </template>
    <template #title>
      Nuxt 3
    </template>
    <template #description>
      The Intuitive Web Framework.
      Build your next Vue.js application with confidence using Nuxt.
    </template>
  </FrameworkCard>
</CFlex>
</template>