<template>
  <c-box>
    <c-button mb="4" variant-color="blue" @click="show = !show">
      Toggle
    </c-button>
    <c-collapse :is-open="show">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book.
    </c-collapse>
  </c-box>
</template> 

<script setup>
import {
  CBox,
  CButton,
  CCollapse,
} from "@chakra-ui/vue-next";
import { ref } from 'vue';

const show = ref(false);
</script>
