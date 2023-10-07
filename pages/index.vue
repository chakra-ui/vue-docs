<script lang="ts" setup>
import { chakra } from '@chakra-ui/vue-next';
import StartHero from '../components/home/StartHero.server.vue';
import { siteDescription, siteName } from '~/config/site-config';

const ComponentApi = defineAsyncComponent(
  () => import('../components/home/ComponentApi.server.vue')
);
const DiscordHero = defineAsyncComponent(
  () => import('../components/home/DiscordHero.server.vue')
);
const Footer = defineAsyncComponent(
  () => import('../components/home/Footer.server.vue')
);

definePageMeta({
  layout: 'home'
});

useHead({
  title: siteName,
  meta: [
    {
      name: `description`,
      content: siteDescription
    }
  ]
});
</script>

<template>
  <chakra.main :min-h="['auto', 'auto', '100vh']" w="100%">
    <StartHero />
    <ComponentApi />
    <DiscordHero />
    <Footer />
  </chakra.main>
</template>
