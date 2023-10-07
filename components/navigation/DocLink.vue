<template>
  <chakra.div>
    <CLink
      :as="NuxtLink"
      prefetch
      :to="props.navItemPath"
      :aria-current="isCurrent ? 'page' : undefined"
      text-style="sidebarLink"
      :sx="{
        color: 'currentColor',
        position: 'relative',
        '&:after': {
          content: `''`,
          position: 'absolute',
          width: '100%',
          transform: 'scaleX(0)',
          height: '1px',
          top: '85%',
          left: 0,
          backgroundColor: 'currentColor',
          transformOrigin: 'bottom right',
          transition: 'transform .4s cubic-bezier(.86, 0, .07, 1)'
        },
        '&:hover::after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left'
        }
      }"
      :_hover="{
        textDecoration: 'none'
      }"
    >
      <slot />
    </CLink>
  </chakra.div>
</template>

<script lang="ts" setup>
import type { NavItem } from '@nuxt/content/dist/runtime/types';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { chakra } from '@chakra-ui/vue-next';
const NuxtLink = resolveComponent('nuxt-link') as any;

const props = defineProps<{
  navItemPath: NavItem['_path'];
}>();

const route = useRoute();
const isCurrent = computed(() => route.path === props.navItemPath);
</script>
