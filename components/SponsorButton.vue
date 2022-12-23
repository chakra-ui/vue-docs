<script setup lang="ts">
import { CBox, CIcon } from '@chakra-ui/vue-next'
import siteConfig from '@/config/site-config'
</script>

<template>
  <CBox
    :display="{ base: 'none', lg: 'flex' }"
    align-items="center"
    as="a"
    aria-label="Sponsor Chakra UI on Open Collective"
    :href="siteConfig.openCollective.url"
    target="_blank"
    rel="noopener noreferrer"
    bg="transparent"
    border-width="1px"
    border-color="currentColor"
    border-style="solid"
    px="1em"
    min-h="36px"
    border-radius="md"
    font-size="sm"
    color="currentColor"
    outline="0"
    transition="all 0.3s"
    :_hover="{
      bg: 'gray.100',
      borderColor: 'gray.300',
    }"
    :_active="{
      borderColor: 'gray.200',
    }"
    :_focus="{
      boxShadow: 'outline',
    }"
    v-bind="$attrs"
  >
    <CIcon
      name="heart"
      w="4"
      h="4"
      :_dark="{ color: 'red.200' }"
      color="red.500"
      mr="2"
    />
    <CBox as="strong" line-height="inherit" font-weight="semibold">
      Sponsor
    </CBox>
  </CBox>
</template>
