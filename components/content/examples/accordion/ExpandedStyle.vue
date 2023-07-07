<template>
  <CAccordion>
    <CAccordionItem>
      <CAccordionButton :_expanded="{ bg: 'purple', color: 'white' }">
        <CVStack align="flex-start" w="full">
          Watercraft
        </CVStack>
        <CAccordionIcon element="c-accordion-item" />
      </CAccordionButton>
      <CAccordionPanel> Sample accordion content </CAccordionPanel>
    </CAccordionItem>
  </CAccordion>
</template>

<script setup>
import {
  CAccordion,
  CAccordionIcon,
  CAccordionItem,
  CAccordionButton,
  CAccordionPanel,
  CVStack
} from "@chakra-ui/vue-next"
</script>
