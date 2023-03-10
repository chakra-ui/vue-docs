<script setup lang="ts">
import {
  chakra,
  useColorMode,
  useColorModeValue,
  CHStack,
  CFlex,
  CIcon,
  CIconButton,
  CLink
} from '@chakra-ui/vue-next'
import { useWindowScroll } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import SponsorButton from './SponsorButton.vue'
// import { SearchButton } from "./AlgoliaSearch.vue"
// import { MobileNavButton } from "./MobileNav.vue"
import VersionSwitcher from './VersionSwitcher'
import siteConfig from '@/config/site-config'

const NuxtLink = resolveComponent('nuxt-link')

const { toggleColorMode } = useColorMode()
const text = useColorModeValue('dark', 'light')
const switchIcon = useColorModeValue('moon', 'sun')
const bg = useColorModeValue('white', 'gray.800')

const headerRef = ref<{ $el: HTMLDivElement } | undefined>(undefined)

const { y } = useWindowScroll()

const height = ref(0)

onMounted(() => {
  height.value = headerRef.value?.$el.getBoundingClientRect().height ?? 0
})

const headerShadow = computed(() => {
  return y.value > height.value ? 'sm' : undefined
})
</script>

<template>
  <chakra.header
    ref="headerRef"
    :box-shadow="headerShadow"
    transition="box-shadow 0.2s, background-color 0.2s"
    pos="sticky"
    top="0"
    z-index="3"
    left="0"
    right="0"
    width="full"
    :bg="bg"
    backdrop-filter="saturate(120%) blur(5px)"
    border-top="6px solid"
    border-color="emerald.500"
  >
    <chakra.nav height="4.5rem" mx="auto" max-w="8xl">
      <!-- content -->
      <CFlex w="100%" h="100%" px="6" align="center" justify="space-between">
        <CFlex align="center">
          <CLink
            :as="NuxtLink"
            to="/"
            aria-label="Chakra UI Vue, Back to homepage"
          >
            <ChakraLogo />
            <!-- <CBox min-w="3rem" :display="{ base: 'block', md: 'none' }">
              <ChakraLogoIcon />
            </CBox> -->
          </CLink>
        </CFlex>

        <!-- nav -->
        <CFlex
          justify="flex-end"
          w="100%"
          max-w="1100px"
          align="center"
          color="gray.400"
        >
          <!-- <SearchButton></SearchButton> -->
          <VersionSwitcher />
          <CHStack spacing="5" :display="{ base: 'none', md: 'flex' }">
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
          </CHStack>
          <CIconButton
            size="md"
            font-size="lg"
            :aria-label="`Switch to ${text} mode`"
            :title="`Switch to ${text} mode`"
            variant="ghost"
            color="current"
            :ml="{ base: '0', md: '3' }"
            :icon="switchIcon"
            @click="toggleColorMode"
          />
          <SponsorButton ml="5" />
          <!-- <mobile-nav-button @click="isOpen = true"></mobile-nav-button> -->
        </CFlex>
      </CFlex>
      <!-- <mobile-nav :is-open="isOpen" @close="isOpen = false"></mobile-nav> -->
    </chakra.nav>
  </chakra.header>
</template>
