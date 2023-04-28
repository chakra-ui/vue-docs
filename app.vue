<template>
  <div>
    <chakra.div
      position="absolute"
      z-index="0"
      top="0"
      left="0"
      right="0"
      bg="pageBackgroundGradiant"
      min-h="100vh"
      pointer-events="none"
    />
    <NuxtLoadingIndicator :height="5" color="#1aff75" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
@import url('@/styles/typography/all.css');
</style>
