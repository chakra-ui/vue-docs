---
title: Stack
description: Stack Component
version: 2.0+
---

# Stack

Stack is a layout utility component that makes it easy to stack elements together and apply a space between them. It composes the `Flex` component.

## Import

By default, each item is stacked vertically. `CStack` clones its children and passes the spacing to them using `margin-bottom` or `margin-right`.

```js
import { CStack } from '@chakra-ui/vue-next';
```

In addition, Chakra-UI Vue exports two additional `CStack` components
- `CVStack`: used to stack elements in the vertical direction
- `CHStack`: used to stack elements in the horizontal direction

```js
import { CStack, CHStack, CVStack } from '@chakra-ui/vue-next';
```

## Usage

::showcase
::basic-stack
::
::

```html
<CStack :spacing="5">
  <CBox :p="5" shadow="md" border-width="1px">
    <CHeading>See the Vue</c-heading>
    <CText :mt="4">Vue makes front-end development a breeze.</c-text>
  </CBox>
  <CBox :p="5" shadow="md" border-width="1px">
    <CHeading>Go Nuxt!</c-heading>
    <CText :mt="4">Nuxt makes writing Vue even easier.</c-text>
  </CBox>
</CStack>
```

## Stack items horizontally

You can stack the items horizontally either:

- By passing the `is-inline` prop or `direction` and set it to `row` to the `CStack` component.

::showcase
::horizontal-stack
::
::

```html
<CStack :spacing="5" is-inline>
  <CBox :p="5" shadow="md" border-width="1px">
    <CHeading>See the Vue</c-heading>
    <CText :mt="4">Vue makes front-end development a breeze.</c-text>
  </CBox>
  <CBox :p="5" shadow="md" border-width="1px">
    <CHeading>Go Nuxt!</c-heading>
    <CText :mt="4">Nuxt makes writing Vue even easier.</c-text>
  </CBox>
</CStack>
```

- Using the `CHStack` component.

::showcase
::horizontal-stack-two
::
::

```html
<CHStack :spacing="5">
  <CBox :p="5" shadow="md" border-width="1px">
    <CHeading>See the Vue</c-heading>
    <CText :mt="4">Vue makes front-end development a breeze.</c-text>
  </CBox>
  <CBox :p="5" shadow="md" border-width="1px">
    <CHeading>Go Nuxt!</c-heading>
    <CText :mt="4">Nuxt makes writing Vue even easier.</c-text>
  </CBox>
</CHStack>
```

Optionally, you can use align and justify to adjust the alignment and distribution of the items.

## Reverse display order of items

Set `direction` to `row-reverse` or `column-reverse`.

::showcase
::reverse-stack
::
::

```html
<CStack :spacing="5" is-reversed>
  <CBox :p="5" shadow="md" border-width="1px">
    <CHeading>See the Vue</c-heading>
    <CText :mt="4">Vue makes front-end development a breeze.</c-text>
  </CBox>
  <CBox :p="5" shadow="md" border-width="1px">
    <CHeading>Go Nuxt!</c-heading>
    <CText :mt="4">Nuxt makes writing Vue even easier.</c-text>
  </CBox>
</CStack>
```

### Stacking HTML elements

::showcase
::html-stack
::
::

```html
<CStack :spacing="4">
  <CText>Chakra component 1</CText>
  <p>HTML paragraph element</p>
  <h3>HTML heading element</h3>
  <CText>Chakra component 2</c-text>
</CStack>
```

## Props

| Name             | Type                        | Default | Description                                                                                                                           |
|------------------|-----------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------|
| `isInline`       | `boolean`                   | false   | If `true` the items will be stacked horizontally.                                                                                                                 |
| `direction`        | `FlexProps["flexDirection"]`      |    | The direction to stack the items.                                                                                                    |
| `spacing`       | `StyledSystem.MarginProps`      |         | The space between each stack item                                                                                               |
| `align`       | `FlexProps["alignItems"]`      |         | The alignment of the stack item. Similar to `align-items`                                                                                               |
| `justify`       | `FlexProps["justifyContent"]`      |         | The distribution of the stack item. Similar to `justify-content`                                                                                                  |
| `shouldWrapChildren` | `boolean` | false  | If `true`, the children will be wrapped in a `Box` with `display: inline-block`, and the Box will take the spacing props |
| `divider` | `boolean` | false  | If `true`, the stack items will be divided by a straight line |