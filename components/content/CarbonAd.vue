<script setup lang="ts">
import { chakra, CBox, CFlex, useColorModeValue } from '@chakra-ui/vue-next'
const bg = useColorModeValue('gray.50', 'rgba(36, 70, 93, 0.32)')
</script>

<template>
  <CFlex
    p="4"
    :bg="bg"
    as="a"
    href="https://pro.chakra-ui.com/components?utm_source=chakra-ui.com&utm_medium=docs-ad"
    rel="noopener sponsored"
    target="_blank"
    max-w="xl"
    my="8"
    rounded="md"
  >
    <CBox w="xs" h="100px" bg="gray.300" mr="4">
      <chakra.img />
    </CBox>
    <CFlex direction="column">
      <CBox flex="1" font-size="sm">
        <b>Chakra UI Pro:</b> Start your application or marketing site with a
        growing collection of beautiful and responsive UI components.
      </CBox>
      <CBox font-weight="medium" font-size="xs" opacity="{0.7}">
        Ads via Chakra UI
      </CBox>
    </CFlex>
  </CFlex>
</template>
