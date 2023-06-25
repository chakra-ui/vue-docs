<template>
  <c-accordion>
    <c-accordion-item>
      <c-accordion-button :_expanded="{ bg: 'purple', color: 'white' }">
        <c-v-stack align="flex-start" w="full">
          Watercraft
        </c-v-stack>
        <c-accordion-icon element="c-accordion-item" />
      </c-accordion-button>
      <c-accordion-panel> Sample accordion content </c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup>
import {
  CAccordion,
  CAccordionItem,
  CAccordionButton,
  CAccordionPanel,
} from "@chakra-ui/vue-next"
</script>
