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
<c-box bg="tomato" w="100%" p="4" color="white">
  This is the Box
</c-box>
```

## Composition with `CBox`

::showcase
:air-bnb-box{width=full}
::

```html
<template>
  <c-box maxW="sm" border-width="1px" rounded="lg" overflow="hidden">
    <c-image :src="property.imageUrl" :alt="property.imageAlt" />
    <c-box p="6">
      <c-box d="flex" align-items="baseline">
        <c-badge rounded="full" px="2" variant-color="green">
          New
        </c-badge>
        <c-box color="gray.500" font-weight="semibold" letter-spacing="wide" font-size="xs" text-transform="uppercase"
          ml="2">
          {{ property.beds }} beds &bull; {{ property.baths }} baths
        </c-box>
      </c-box>
      <c-box mt="1" font-weight="semibold" as="h4" line-height="tight" is-truncated>
        {{ property.title }}
      </c-box>
      <c-box>
        {{ property.formattedPrice }}
        <c-box as="span" color="gray.600" fontSize="sm">
          / wk
        </c-box>
      </c-box>
      <c-box d="flex" mt="2" align-items="center">
        <c-icon v-for="(_, i) in Array(5).fill('')" name="star" :key="i"
          :color="i < property.rating ? 'green.500' : 'gray.300'" />
        <c-box as="span" ml="2" color="gray.600" font-size="sm">
          {{ property.reviewCount }} reviews
        </c-box>
      </c-box>
    </c-box>
  </c-box>
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
<c-box as="button" rounded="md" bg="tomato" color="white" px="4" h="8">
  Button
</c-box>
```

## Props

See all `CBox` props in the [Style props page](/styled-system/style-props)