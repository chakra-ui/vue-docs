---
title: Code
description: Code component
version: 2.0+
---
# Code

Code is a component used to display inline code. It is composed of the `Box` component with a font family of `mono` for displaying code.

## Import

```js
import { CCode } from "@chakra-ui/vue-next"
```

## Usage

::showcase
:simple-code
::

```html
<CCode>Hello world </CCode>
```

## Colors

You can change the color scheme of the component by passing the `colorScheme` prop.

::showcase
:colors-code
::

```html
<CStack is-inline>
    <CCode>console.log(welcome)</CCode>
    <CCode color-scheme="red">var chakra = 'awesome!'></CCode>
    <CCode color-scheme="yellow">npm install chakra</CCode>
</CStack>
```

## Variant

You can change the variant of the component by passing the `variant` prop.

::showcase
:variant-code
::

```html
<CStack is-inline>
    <CCode color-scheme="whatsapp" variant="outline">Outline </CCode>
    <CCode color-scheme="whatsapp" variant="subtle">Solid </CCode>
    <CCode color-scheme="whatsapp" variant="solid">Solid</CCode>
</CStack>
```

## Props

| Name          | Type                               | Default  | Description                           |
|---------------|------------------------------------|----------|---------------------------------------|
| `colorScheme` | `string`                           | `grey`   | The color scheme to use for the code. |
| `variant`     | `"solid" \| "subtle" \| "outline"` | `subtle` | The variant of the Code               |

## Slots

| Name          | Description                           |
|---------------|---------------------------------------|
| `default` | Used for the `CCode` content.           |