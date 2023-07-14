<template>
  <CBox>
    <CButton mb="4" variant-color="blue" @click="show = !show">
      Show {{ show ? 'Less' : 'More' }}
    </CButton>
    <CCollapse :is-open="show" :starting-height="20">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book.
    </CCollapse>
  </CBox>
</template>


<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>
