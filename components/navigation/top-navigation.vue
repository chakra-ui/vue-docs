<script setup lang="ts">
import {
  chakra,
  useColorMode,
  CHStack,
  CFlex,
  CIcon,
  CIconButton,
  CLink
} from '@chakra-ui/vue-next';
import { onMounted, ref } from 'vue';
import SponsorButton from '../SponsorButton.server.vue';
import VersionSwitcher from '../VersionSwitcher';
import siteConfig from '@/config/site-config';

const { colorMode, toggleColorMode } = useColorMode();

const headerRef = ref<{ $el: HTMLDivElement } | undefined>(undefined);

const height = ref(0);

onMounted(() => {
  height.value = headerRef.value?.$el.getBoundingClientRect().height ?? 0;
});
</script>

<template>
  <chakra.header
    ref="headerRef"
    transition="box-shadow 0.2s, background-color 0.2s"
    pos="sticky"
    top="0"
    z-index="overlay"
    left="0"
    right="0"
    width="full"
    backdrop-filter="saturate(120%) blur(5px)"
    border-bottom="1px solid"
    border-color="emerald.500"
    border-bottom-color="emerald.500"
  >
    <chakra.nav height="4.5rem" mx="auto" max-w="8xl">
      <!-- content -->
      <CFlex w="100%" h="100%" px="6" align="center" justify="space-between">
        <CFlex align="center">
          <router-link to="/">
            <chakra.a
              display="block"
              aria-label="Chakra UI Vue, Back to homepage"
            >
              <ChakraLogo />
            </chakra.a>
          </router-link>
        </CFlex>

        <!-- nav -->
        <CFlex
          justify="flex-end"
          w="100%"
          max-w="1100px"
          align="center"
          color="gray.400"
        >
          <VersionSwitcher />
          <CHStack
            spacing="5"
            :display="{ base: 'none', md: 'flex' }"
            align-items="center"
          >
            <CLink
              is-external
              aria-label="Go to Chakra UI GitHub page"
              :href="siteConfig.repo.url"
            >
              <CIcon
                display="block"
                transition="color 0.2s"
                w="5"
                h="5"
                :_hover="{ color: 'gray.600' }"
                name="github"
              />
            </CLink>
            <CLink
              is-external
              aria-label="Go to Chakra UI Discord page"
              :href="siteConfig.discord"
            >
              <CIcon
                display="block"
                transition="color 0.2s"
                w="5"
                h="5"
                :_hover="{ color: 'gray.600' }"
                name="discord"
              />
            </CLink>
            <CLink
              is-external
              aria-label="Go to Chakra UI YouTube channel"
              :href="siteConfig.youtube"
            >
              <CIcon
                display="block"
                transition="color 0.2s"
                w="5"
                h="5"
                :_hover="{ color: 'gray.600' }"
                name="youtube"
              />
            </CLink>
            <CIconButton
              aria-label="Switch color mode"
              variant="ghost"
              size="sm"
              type="button"
              @click="toggleColorMode"
            >
              <IconsMoonIcon v-if="colorMode === 'light'" />
              <IconsSunIcon v-else />
            </CIconButton>
            <SponsorButton ml="5" />
          </CHStack>
          <!-- <mobile-nav-button @click="isOpen = true"></mobile-nav-button> -->
        </CFlex>
      </CFlex>
      <!-- <mobile-nav :is-open="isOpen" @close="isOpen = false"></mobile-nav> -->
    </chakra.nav>
  </chakra.header>
</template>
