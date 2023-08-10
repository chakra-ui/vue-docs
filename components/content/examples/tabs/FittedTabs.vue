<template>
  <CBox w="600px">
    <CTabs is-fitted variant="solid-rounded">
      <CTabList v-model="selected">
        <CTab value='1'>One</CTab>
        <CTab value='2'>Two</CTab>
        <CTab value='3'>Three</CTab>
      </CTabList>

      <CTabPanels v-model="selected">
        <CTabPanel value='1'>
          <p>Panel One</p>
        </CTabPanel>
        <CTabPanel value='2'>
          <p>Panel Two</p>
        </CTabPanel>
        <CTabPanel value='3'>
          <p>Panel Three</p>
        </CTabPanel>
      </CTabPanels>
    </CTabs>
  </CBox>
</template> 

<script setup>
import { ref } from 'vue';
import {
  CTabs,
  CTabList,
  CTabPanels,
  CTab,
  CTabPanel
} from "@chakra-ui/vue-next";

const selected = ref(1);
</script>
