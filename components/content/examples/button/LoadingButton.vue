<template>
  <div>
    <c-button
      mr="3"
      :is-loading="isLoading"
      color-scheme="teal"
      loading-text="Saving..."
      size="lg"
      color="white"
      font-size="sm"
      @click="doTask"
    >
      Click me
    </c-button>
    <c-button
      mr="3"
      :is-loading="isLoading"
      @click="doTask"
      color-scheme="purple"
      size="lg"
      font-size="sm"
    >
      Click me
    </c-button>
  </div>
</template>
<script lang="ts">
import { CButton } from '@chakra-ui/vue-next';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isLoading = ref(false);
    let loadingTimeout: any;
    const doTask = () => {
      isLoading.value = true;
      loadingTimeout = setTimeout(() => {
        isLoading.value = false;
        console.log({ isLoading: isLoading.value });
      }, 60000);
      clearTimeout(loadingTimeout);
    };

    return {
      isLoading,
      doTask
    };
  }
});
</script>
