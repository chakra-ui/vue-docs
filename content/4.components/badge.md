---
title: Badge
description: Badge Component
version: 2.0+
---

# Badge

The `CBadge` component is used to highlight an item's status for quick recognition.

## Import

```js
import { CBadge } from '@chakra-ui/vue-next';
```

## Usage

::showcase
::base-badge
::
::

```html
<c-badge>Default</c-badge>
```

### Badge Color

Pass the `color-scheme` prop to customize the color of the `CBadge`. `variant-color` can be any color key that exists in the `$chakra.theme.colors`. Here `$chakra.theme` is your theme object. 
<!-- once styled system theming is up: Learn more about theming -->

::showcase
::wrap{align="center"}
::color-badge
::

```html
<c-stack direction='row'>
    <c-badge>Default</c-badge>
    <c-badge color-scheme='green'>Success</c-badge>
    <c-badge color-scheme='red'>Removed</c-badge>
    <c-badge color-scheme='purple'>New</c-badge>
</c-stack>
```

### Badge Variants

Pass the `variant` prop and set it to either `subtle`, `solid`, or `outline` to get a different style.

::showcase
::variant-badge
::
::

```html
<c-stack direction='row'>
    <c-badge mx="2" variant="subtle" color-scheme="green">Subtle</c-badge>
    <c-badge mx="2" variant="solid" color-scheme="green">Solid</c-badge>
    <c-badge mx="2" variant="outline" color-scheme="green">Outline</c-badge>
</c-stack>
```

## Compositon


::showcase
::composition-badge
::
::

```html
<c-flex>
    <c-avatar src="https://bit.ly/chakra-jonathan-bakebwa" />
    <c-box ml="3">
        <c-text font-weight="bold">
            Jonathan Bakebwa
            <c-badge ml="1" color-scheme="green">
                New
            </c-badge>
        </c-text>
        <c-text font-size="sm">UI Engineer</c-text>
    </c-box>
</c-flex>
```

You can also change the size of the badge by passing `font-size` prop.

::showcase
::composition-badge-two
::
::

```html
<c-text font-weight="bold">
  Jonathan Bakebwa
  <c-badge ml="1" font-size="1em" variant-color="green">
    New
  </c-badge>
</c-text>
```

## Props

> The `CBadge` component composes `CBox` component so you can pass props for `Box`.

| Name            | Type                         | Default  | Description                                                                    |
|-----------------|------------------------------|----------|--------------------------------------------------------------------------------|
| `variant`       | `solid`, `subtle`, `outline` | `subtle` | The style variant of the badge                                                 |
| `variant-color` | `string`                     | `gray`   | The color scheme to use for the badge. Must be a key in `$chakra.theme.colors` |


## Slots

| Name | Description                |
|---------|----------------------------|
| default | Text rendered inside badge |

