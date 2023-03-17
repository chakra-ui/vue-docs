<script setup lang="ts">
import { CFlex, CIcon, CLink } from "@chakra-ui/vue-next";
</script>

<template>
  <CFlex
    as="footer"
    justify-content="center"
    align-items="center"
    :py="[4, 10, 10]"
    bg="white"
  >
    <CLink
      aria-label="View GitHub"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/chakra-ui/chakra-ui-vue-next"
      :_hover="{ color: 'emerald.500' }"
      mx="4"
    >
      <CIcon name="github" mt="8px" />
    </CLink>
    <CLink
      aria-label="View Twitter"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/chakraui_vue"
      :_hover="{ color: 'emerald.500' }"
      mx="4"
    >
      <CIcon name="twitter" mt="8px" />
    </CLink>
    <CLink
      aria-label="Join Discord channel"
      target="_blank"
      rel="noopener noreferrer"
      href="https://discord.gg/sq2Kp6x"
      :_hover="{ color: 'emerald.500' }"
      mx="4"
    >
      <CIcon name="discord" mt="8px" />
    </CLink>
  </CFlex>
</template>
