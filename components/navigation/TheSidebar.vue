<script lang="ts" setup async>
import { CStack } from '@chakra-ui/vue-next'
import DocLink from '~/components/navigation/DocLink.vue'

/**
 * Documentation Fetching
 */
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)
</script>

<template>
  <CStack v-if="navigation" as="ul" spacing="0" list-style-type="none" font-size="sm">
    <li v-for="(item, index) in navigation" :key="index">
      <DocLink :nav-item-path="item._path">
        {{ item.title }}
      </DocLink>
      <!-- <AppNavigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" /> -->
      <CStack
        v-if="item?.children?.length"
        as="ul"
        spacing="0"
        list-style-type="none"
      >
        <DocLink
          v-for="nestedItem in item.children.filter(
            (_) => _._path !== item._path
          )"
          :key="`path:${nestedItem._path}`"
          :nav-item-path="nestedItem._path"
          pl="4"
        >
          {{ nestedItem.title }}
        </DocLink>
      </CStack>
    </li>
  </CStack>
</template>
