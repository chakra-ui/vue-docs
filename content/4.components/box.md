---
title: Box
description: Box component
version: 2.0+
---
# Box

Box is the most abstract component on top of which all other `@chakra-ui/vue` components are built. By default, it renders a `div` element

## Import
```js
import { CBox } from "@chakra-ui/vue-next"
```

## Usage

The Box component is useful because it helps with three common use cases:
- Create responsive layouts with ease.
- Provide a shorthand way to pass styles via props (`bg` instead of `backgroundColor`).
- Compose new component and allow for override using the `as` prop.

::showcase
:simple-box
::


```html
<CBox bg="tomato" w="100%" p="4" color="white">
  This is the Box
</CBox>
```

## Composition with `CBox`

::showcase
:air-bnb-box{width=full}
::

```html
<template>
  <CBox maxW="sm" border-width="1px" rounded="lg" overflow="hidden">
    <CImage :src="property.imageUrl" :alt="property.imageAlt" />
    <CBox p="6">
      <CBox d="flex" align-items="baseline">
        <CBadge rounded="full" px="2" variant-color="green">
          New
        </CBadge>
        <CBox color="gray.500" font-weight="semibold" letter-spacing="wide" font-size="xs" text-transform="uppercase"
          ml="2">
          {{ property.beds }} beds &bull; {{ property.baths }} baths
        </CBox>
      </CBox>
      <CBox mt="1" font-weight="semibold" as="h4" line-height="tight" is-truncated>
        {{ property.title }}
      </CBox>
      <CBox>
        {{ property.formattedPrice }}
        <CBox as="span" color="gray.600" fontSize="sm">
          / wk
        </CBox>
      </CBox>
      <CBox d="flex" mt="2" align-items="center">
        <CIcon v-for="(_, i) in Array(5).fill('')" name="star" :key="i"
          :color="i < property.rating ? 'green.500' : 'gray.300'" />
        <CBox as="span" ml="2" color="gray.600" font-size="sm">
          {{ property.reviewCount }} reviews
        </CBox>
      </CBox>
    </CBox>
  </CBox>
</template>

<script setup>
import { reactive } from 'vue'

const property = reactive(
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }
)

</script>
```

## as prop

You can use the `as` prop to change the element render, just like styled-components.

::showcase
:as-box{width-full}
::

```html
<CBox as="button" rounded="md" bg="tomato" color="white" px="4" h="8">
  Button
</CBox>
```

## Props

See all `CBox` props in the [Style props page](/styled-system/style-props)