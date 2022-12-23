<template>
  <c-stack as="ul" spacing="0" list-style-type="none" font-size="sm">
    <template v-if="navigation">
      <c-box
        as="li"
        v-for="(item, i) in navigation"
        :key="`path:${i}`"
        list-style-type="none"
      >
        <template v-if="item">
          <doc-link :nav-item-path="item._path">
            {{ item?.title }}
          </doc-link>
          <c-stack
            v-if="item?.children?.length"
            as="ul"
            spacing="0"
            list-style-type="none"
          >
            <doc-link
              v-for="nestedItem in item.children.filter(
                (_) => _._path !== item._path
              )"
              :key="`path:${nestedItem._path}`"
              :nav-item-path="nestedItem._path"
              pl="4"
            >
              {{ nestedItem.title }}
            </doc-link>
          </c-stack>
        </template>
      </c-box>
    </template>
  </c-stack>
</template>

<script lang="ts" setup async>
import DocLink from '~/components/navigation/doc-link.vue'
import { CStack, chakra } from '@chakra-ui/vue-next'

/**
 * Documentation Fetching
 */
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)
</script>
