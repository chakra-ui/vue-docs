<script setup lang="ts">
// import { PrismEditor } from 'vue-prism-editor'
import {
  chakra,
  CButton,
  CCode,
  CFlex,
  CHeading,
  CIcon,
  CLink,
  CStack,
  CSimpleGrid,
  CText,
} from "@chakra-ui/vue-next";

const installCode = `yarn add @chakra-ui/vue-next`;

const NuxtLink = resolveComponent("nuxt-link");
</script>

<template>
  <CSimpleGrid
    as="header"
    :template-columns="{ base: '1fr', md: '1fr 1fr' }"
    pos="relative"
    bg="white"
    :bgGradient="{ base: '', md: 'linear(to-br, white, white, emerald.100)' }"
    :min-h="{
      base: 'calc(100vh - 78px)',
      sm: 'auto',
      md: 'calc(100vh - 78px)',
    }"
    :px="[4, 10, 12]"
    :py="{ base: 10, sm: 20 }"
    gap="5"
  >
    <CFlex align="center" h="full">
      <CStack spacing="6">
        <chakra.div>
          <CHeading
            as="h1"
            maxW="16ch"
            :fontSize="{ base: '2.25rem', sm: '3rem', lg: '4rem' }"
            fontFamily="heading"
            letterSpacing="tighter"
            fontWeight="extrabold"
            lineHeight="1.2"
          >
            Build accessible Vue apps
            <chakra.span color="emerald.600" px="5px">with speed</chakra.span>
          </CHeading>
        </chakra.div>
        <CText
          :maxW="{ base: '560px', lg: '650px' }"
          opacity="0.7"
          :fontSize="{ base: 'lg', lg: 'xl' }"
        >
          Chakra UI Vue Next is a simple modular and accessible component
          library that gives you the building blocks to build Vue applications
          with speed.
        </CText>
        <CFlex
          flex-dir="row"
          :justify-content="{ base: 'center', sm: 'flex-start' }"
        >
          <CButton
            :as="NuxtLink"
            text-decoration="none"
            to="/getting-started"
            size="lg"
            color-scheme="green"
            bg="emerald.600"
            :flex="{ base: '1', sm: 'none' }"
          >
            Get started
          </CButton>
          <CButton
            as="a"
            text-decoration="none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/chakra-ui/chakra-ui-vue-next"
            left-icon="github"
            ml="4"
            variant="outline"
            color-scheme="green"
            size="lg"
            color="emerald.600"
            :flex="{ base: '1', sm: 'none' }"
          >
            Github
          </CButton>
        </CFlex>
        <CText font-weight="bold" vertical-align="center">
          👋 &nbsp; V2 (Chidori) is currently in beta.
          <CLink
            ml="1"
            color="gray.700"
            text-decoration="underline"
            to="https://www.notion.so/v1-Roadmap-e8c1387bcb4b4175a0a1720c797c3ddb"
            is-external
          >
            See roadmap <CIcon name="external-link"></CIcon>
          </CLink>
        </CText>
      </CStack>
    </CFlex>
    <CFlex justify="center" align="center" :mt="{ sm: '6', md: 0 }">
      <CCode
        px="5"
        py="4"
        border-radius="lg"
        color="whiteAlpha.900"
        bg="blackAlpha.800"
        font-weight="bold"
        shadow="search"
        :font-size="{ base: 'lg', md: '2xl' }"
      >
        {{ installCode }}
      </CCode>
    </CFlex>
  </CSimpleGrid>
</template>
