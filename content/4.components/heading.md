---
title: Heading
description: Heading component
version: 2.0+
---

# Heading

Headings are used for rendering semantic HTML heading elements.

Heading composes `CBox` so you can use all the style props and add responsive styles as well. It renders an `<h2>` tag by default.

## Imports 

```js
import { CHeading } from '@chakra-ui/vue-next';
```

## Usage

::showcase
:basic-heading
::


```html
<CHeading>I'm a Heading</CHeading>
```

### Changing font size

To increase the size of the heading, you can use the `font-size` or `size` prop. If you use the `size` prop, the font size of the heading will automatically decrease in size for smaller screens.

::showcase
:sizes-heading
::

```html
<CStack spacing="3">
    <CHeading as="h1" size="2xl">
        In love with Vue & Nuxt
    </CHeading>
    <CHeading as="h2" size="xl">
        In love with Vue & Nuxt
    </CHeading>
    <CHeading as="h3" size="lg">
        In love with Vue & Nuxt
    </CHeading>
    <CHeading as="h4" size="md">
        In love with Vue & Nuxt
    </CHeading>
    <CHeading as="h5" size="sm">
        In love with Vue & Nuxt
    </CHeading>
    <CHeading as="h6" size="xs">
        In love with Vue & Nuxt
    </CHeading>
</CStack>
```

### Truncate heading

Pass the `is-truncated` prop to render an ellipsis when the headings exceed

::showcase
:truncated-heading
::

```html
<CHeading is-truncated>
    Basic text writing, including headings, body text, lists, and more.
</CHeading>
```

### Override style

You can override the size of the Heading component by passing the `font-size` prop.

::showcase
:override-heading
::

## Composition

::showcase
:composition-heading
::

```html
<CBox max-w="32rem">
    <CHeading mb="4">Modern online and offline payments for Africa</CHeading>
    <CText font-size="xl">
        Paystack helps businesses in Africa get paid by anyone, anywhere in the
        world
    </CText>
    <CButton size="lg" variant-color="green" mt="24px">
        Create a free account
    </CButton>
</CBox>
```

## Props

> The `CHeading` composes the `CBox` component. So it accepts all Box props along with the related CSS grid props. See Box component for list of props.

| Name   | Values                              | Default | Description              |
|--------|-------------------------------------|---------|--------------------------|
| `size` | `2xl`, `xl`, `lg`, `md`, `sm`, `xs` | `xl`    | The size of the heading. |
| `as`   | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`  | `h2`    | The final tag rendered.  |