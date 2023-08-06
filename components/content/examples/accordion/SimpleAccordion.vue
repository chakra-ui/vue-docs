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

<template>
  <CAccordion>
    <CAccordionItem>
      <CAccordionButton>
        <CVStack align="flex-start" w="full">
          Watercraft
        </CVStack>
        <CAccordionIcon element="c-accordion-item" />
      </CAccordionButton>
      <CAccordionPanel> Sample accordion content </CAccordionPanel>
    </CAccordionItem>
    <CAccordionItem>
      <CAccordionButton>
        <CVStack align="flex-start" w="full">
          Automobiles
        </CVStack>
        <CAccordionIcon />
      </CAccordionButton>
      <CAccordionPanel> Sample accordion content </CAccordionPanel>
    </CAccordionItem>
    <CAccordionItem>
      <CAccordionButton>
        <CVStack align="flex-start" w="full">
          Aircrafts
        </CVStack>
        <CAccordionIcon />
      </CAccordionButton>
      <CAccordionPanel> Sample accordion content </CAccordionPanel>
    </CAccordionItem>
  </CAccordion>
</template>
