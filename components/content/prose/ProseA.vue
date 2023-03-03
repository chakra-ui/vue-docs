<template>
  <NuxtLink prefetch>
    <slot />
  </NuxtLink>
</template>

<style scoped>
a {
  color: var(--chakra-colors-green-400);
}
a:hover {
  text-decoration: underline;
}
</style>
