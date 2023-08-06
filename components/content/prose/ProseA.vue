<script setup>
const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  }
})
function isHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
const isExternal = isHttpUrl(props.href)
let bindProps = {
  to: props.href
}
if (isExternal || props.blank) {
  bindProps.target = '_blank'
}
</script>

<style scoped>
a {
  color: var(--chakra-colors-green-600);
}

a:hover {
  text-decoration: underline;
}
</style>


<template>
  <NuxtLink v-bind="bindProps">
    <slot />
  </NuxtLink>
</template>

