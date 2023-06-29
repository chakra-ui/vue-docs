<template>
  <c-wrap spacing='30px' align='center'>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='red.200'>
        Box 1
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='40px' bg='green.200'>
        Box 2
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='tomato'>
        Box 3
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='60px' bg='blue.200'>
        Box 4
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='purple.200'>
        Box 5
      </c-center>
    </c-wrap-item>
  </c-wrap>
</template>

<script setup>
import { CWrap, CWrapItem, CCenter } from "@chakra-ui/vue-next"
</script>
