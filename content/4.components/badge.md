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
<CBadge>Default</CBadge>
```

### Badge Color

Pass the `color-scheme` prop to customize the color of the `CBadge`. `variant-color` can be any color key that exists in the `$chakra.theme.colors`. Here `$chakra.theme` is your theme object. 
<!-- once styled system theming is up: Learn more about theming -->

::showcase
::wrap{align="center"}
::color-badge
::

```html
<CStack direction='row'>
    <CBadge>Default</CBadge>
    <CBadge color-scheme='green'>Success</CBadge>
    <CBadge color-scheme='red'>Removed</CBadge>
    <CBadge color-scheme='purple'>New</CBadge>
</CStack>
```

### Badge Variants

Pass the `variant` prop and set it to either `subtle`, `solid`, or `outline` to get a different style.

::showcase
::variant-badge
::
::

```html
<CStack direction='row'>
    <CBadge mx="2" variant="subtle" color-scheme="green">Subtle</CBadge>
    <CBadge mx="2" variant="solid" color-scheme="green">Solid</CBadge>
    <CBadge mx="2" variant="outline" color-scheme="green">Outline</CBadge>
</CStack>
```

## Compositon


::showcase
::composition-badge
::
::

```html
<CFlex>
    <CAvatar src="https://bit.ly/chakra-jonathan-bakebwa" />
    <CBox ml="3">
        <CText font-weight="bold">
            Jonathan Bakebwa
            <CBadge ml="1" color-scheme="green">
                New
            </CBadge>
        </CText>
        <CText font-size="sm">UI Engineer</CText>
    </CBox>
</CFlex>
```

You can also change the size of the badge by passing `font-size` prop.

::showcase
::composition-badge-two
::
::

```html
<CText font-weight="bold">
  Jonathan Bakebwa
  <CBadge ml="1" font-size="1em" variant-color="green">
    New
  </CBadge>
</CText>
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

