<script lang="ts" setup>
import { chakra } from '@chakra-ui/vue-next';
import DiscordHero from '../components/home/DiscordHero.server.vue';
import Footer from '../components/home/Footer.server.vue';
import StartHero from '../components/home/StartHero.server.vue';
import PilersHero from '../components/home/PilersHero.server.vue';

import { siteDescription, siteName } from '~/config/site-config';

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
