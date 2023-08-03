<template>
  <CStack :spacing="5" direction="column-reverse">
    <CBox :p="5" shadow="md" border-width="1px">
      <CHeading>See the Vue</CHeading>
      <CText :mt="4">Vue makes front-end development a breeze.</CText>
    </CBox>
    <CBox :p="5" shadow="md" border-width="1px">
      <CHeading>Go Nuxt!</CHeading>
      <CText :mt="4">Nuxt makes writing Vue even easier.</CText>
    </CBox>
  </CStack>
</template>