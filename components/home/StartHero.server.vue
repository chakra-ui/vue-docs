<script setup lang="ts">
import { chakra, useColorModeValue } from '@chakra-ui/vue-next';
import ExternalLinkIcon from '../icons/external-link-icon';
const installCode = `yarn add @chakra-ui/vue-next`;

const NuxtLink = resolveComponent('nuxt-link') as any;
</script>

<template>
  <CContainer max-w="8xl">
    <CSimpleGrid
      as="header"
      :template-columns="{ base: '1fr', md: '1fr 1fr' }"
      pos="relative"
      :min-h="{
        base: 'calc(100vh - 78px)',
        sm: 'auto'
      }"
      :py="{ base: 10, sm: 20 }"
      gap="5"
    >
      <CFlex align="center" h="full">
        <CStack spacing="6" align-items="flex-start">
          <c-h-stack
            layer-style="hero.notice"
            py="1"
            pr="1"
            pl="3"
            justify-content="center"
            align-items="center"
          >
            <chakra.span
              font-weight="light"
              font-size="sm"
              vertical-align="center"
            >
              V2 is currently in beta.
            </chakra.span>
            <c-button
              as="a"
              href="https://github.com/orgs/chakra-ui/projects/6"
              target="_blank"
              icon-spacing="1"
              :right-icon="ExternalLinkIcon"
              size="xs"
            >
              See roadmap
            </c-button>
          </c-h-stack>
          <chakra.div>
            <CHeading
              as="h1"
              max-w="16ch"
              :font-size="{ base: '2.25rem', sm: '3rem', lg: '4rem' }"
              font-family="heading"
              letter-spacing="tighter"
              font-weight="extrabold"
              line-height="1.2"
            >
              Build accessible Vue apps
              <chakra.span
                :color="useColorModeValue('emerald.600', 'emerald.100').value"
                px="5px"
                >with speed</chakra.span
              >
            </CHeading>
          </chakra.div>
          <CText
            :max-w="{ base: '560px', lg: '650px' }"
            opacity="0.8"
            :font-size="{ base: 'lg', lg: 'xl' }"
          >
            Beautiful & accessible Vue components for crafting high-quality
            Design System driven applications for the web.
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
              color-scheme="emerald"
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
              color-scheme="emerald"
              size="lg"
              :color="useColorModeValue('emerald.600', 'emerald.100').value"
              :flex="{ base: '1', sm: 'none' }"
            >
              Github
            </CButton>
          </CFlex>
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
  </CContainer>
</template>
