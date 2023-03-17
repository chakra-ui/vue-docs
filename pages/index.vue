<script lang="ts" setup>
import { siteDescription, siteName } from '~/config/site-config';
import { chakra } from '@chakra-ui/vue-next';
import StartHero from '../components/home/StartHero.server.vue';
const DiscordHero = defineAsyncComponent(
  () => import('../components/home/DiscordHero.server.vue')
);
const Footer = defineAsyncComponent(
  () => import('../components/home/Footer.server.vue')
);
const PilersHero = defineAsyncComponent(
  () => import('../components/home/PilersHero.server.vue')
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
  <chakra.main :min-h="['auto', 'auto', '100vh']" w="100%" bg="white">
    <StartHero />
    <PilersHero />
    <DiscordHero />
    <Footer />
  </chakra.main>
</template>
