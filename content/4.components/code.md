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
<c-code>Hello world </c-code>
```

## Colors

You can change the color scheme of the component by passing the `colorScheme` prop.

::showcase
:colors-code
::

```html
<c-stack is-inline>
    <c-code>console.log(welcome)</c-code>
    <c-code color-scheme="red">var chakra = 'awesome!'></c-code>
    <c-code color-scheme="yellow">npm install chakra</c-code>
</c-stack>
```

## Variant

You can change the variant of the component by passing the `variant` prop.

::showcase
:variant-code
::

```html
<c-stack is-inline>
    <c-code color-scheme="whatsapp" variant="outline">Outline </c-code>
    <c-code color-scheme="whatsapp" variant="subtle">Solid </c-code>
    <c-code color-scheme="whatsapp" variant="solid">Solid</c-code>
</c-stack>
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