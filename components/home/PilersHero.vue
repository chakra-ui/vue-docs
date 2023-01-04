<script setup lang="ts">
import { chakra, CBox, CFlex, CIcon, CSimpleGrid } from "@chakra-ui/vue-next";
</script>

<template>
  <CFlex
    as="section"
    :flex-dir="['column', 'column', 'row']"
    font-family="body"
    :py="[4, 10, 10]"
  >
    <CSimpleGrid
      :template-columns="['auto', 'auto', 'repeat(3, 1fr)']"
      gap="1.5rem"
      shadow="lg"
      bg="white"
      py="10"
      :px="{ base: '3', sm: '10' }"
    >
      <CBox my="3" :mx="{ base: '0', sm: '3' }">
        <CFlex align-items="center" mb="5">
          <CFlex
            justify-content="center"
            align-items="center"
            mr="5"
            bg="emerald.200"
            w="50px"
            h="50px"
            rounded="full"
          >
            <CIcon display="block" w="5" h="5" name="accessibilityAlt" />
          </CFlex>
          <chakra.h2 font-size="xl"> Accessible </chakra.h2>
        </CFlex>
        Chakra UI strictly follows WAI-ARIA standards. All components come with
        proper attributes and keyboard interactions out of the box.
      </CBox>
      <CBox my="3" :mx="{ base: '0', sm: '3' }">
        <CFlex align-items="center" mb="5">
          <CFlex
            justify-content="center"
            align-items="center"
            mr="5"
            bg="emerald.200"
            w="50px"
            h="50px"
            rounded="full"
          >
            <CIcon display="block" w="5" h="5" name="colorPalette" />
          </CFlex>
          <chakra.h2 font-size="xl"> Themeable </chakra.h2>
        </CFlex>
        Quickly and easily reference values from your theme throughout your
        entire application, on any component.
      </CBox>
      <CBox m="3" :mx="{ base: '0', sm: '3' }">
        <CFlex align-items="center" mb="5">
          <CFlex
            justify-content="center"
            align-items="center"
            mr="5"
            bg="emerald.200"
            w="50px"
            h="50px"
            rounded="full"
          >
            <CIcon display="block" w="5" h="5" name="cube" />
          </CFlex>
          <chakra.h2 font-size="xl"> Composable </chakra.h2>
        </CFlex>
        Components were built with composition in mind. You can leverage any
        component to create new things.
      </CBox>
    </CSimpleGrid>
  </CFlex>
</template>
