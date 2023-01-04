<script lang="ts" setup>
import { chakra } from "@chakra-ui/vue-next";
import DiscordHero from "../components/home/DiscordHero.vue";
import Footer from "../components/home/Footer.vue";
import StartHero from "../components/home/StartHero.vue";
import PilersHero from "../components/home/PilersHero.vue";

definePageMeta({
  layout: "home",
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
