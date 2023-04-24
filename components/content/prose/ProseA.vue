<template>
  <NuxtLink prefetch>
    <slot />
  </NuxtLink>
</template>

<style scoped>
a {
  color: var(--chakra-colors-green-600);
}
a:hover {
  text-decoration: underline;
}
</style>
