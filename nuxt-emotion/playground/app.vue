<template>
  <div :class="styles.root">Nuxt module playground!</div>
</template>

<script setup>
import { css } from "@emotion/css";

const styles = reactive({
  root: css({
    paddingInline: "16px",
    paddingBlock: "12px",
    fontSize: "1rem",
    fontFamily: "system ui",
    color: "white",
    borderRadius: "20px",
    backgroundColor: "indigo",
  }),
});
</script>
