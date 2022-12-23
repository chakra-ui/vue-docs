<template>
  <VueLive :code="code" :components="Chakra" :layout="CodeEditorLayout" />
</template>

<script setup lang="ts">
import { VueLive } from 'vue-live'
import * as Chakra from '@chakra-ui/vue-next'
import CodeEditorLayout from './Editor/CodeEditorLayout.vue'
// import "prismjs/themes/prism-twilight.min.css"

defineProps<{ code: string }>()
</script>
