---
title: Image
description: Image component
version: 2.0+
---
# Image

The Image component is used to display images with support for fallback.

## Import

```js
import { CImage } from "@chakra-ui/vue-next"
```

## Usage

::showcase
:simple-image
::


```html
<CBox w="sm">
    <CImage src="https://bit.ly/chakra-jonathan-bakebwa" alt="Jonathan Bakebwa" />
</CBox>
```

## Size

The size of the image can be adjusted using the `box-size` prop.

::showcase
:box-image
::


```html
<CStack direction='row'>
    <CImage box-size='100px' object-fit='cover' src="https://bit.ly/chakra-jonathan-bakebwa" alt="Jonathan Bakebwa" />
    <CImage box-size='150px' object-fit='cover' src="https://bit.ly/chakra-jonathan-bakebwa" alt="Jonathan Bakebwa" />
    <CImage box-size='200px' src="https://bit.ly/chakra-jonathan-bakebwa" alt="Jonathan Bakebwa" />
</CStack>
```

## Image with border radius

::showcase
:rounded-image
::


```html
<CBox w="sm">
    <CImage border-radius='full' box-size='150px' src="https://bit.ly/chakra-jonathan-bakebwa" alt="Jonathan Bakebwa" />
</CBox>
```

## Fallback support

The Image component allows you provide a fallback placeholder. The placeholder is displayed when:

- The fallback or `fallback-src` prop is provided
- The image provided in `src` is currently loading
- An error occurred while loading the image `src`
- No `src` prop was passed

> You can also opt out of this behavior by passing the ignoreFallback prop.

::showcase
::fallback-image
::
::

```html
<CImage src="gibberesh.png" fallbackSrc="https://via.placeholder.com/150" />
```

## Props

| Name             | Type                        | Default | Description                                                                                                                           |
|------------------|-----------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------|
| `src`       | `string`                   |   | The path to the image source                                                                                                                 |
| `fallback-src`        | `string`      |    | In event there was an error loading the `src`, specify a fallback. In most cases, this can be an avatar or image placeholder                                                                                                        |
| `alt`       | `string`      |         | The alt text that describes the image                                                                                               |
| `ignoreFallback`       | `boolean`      |   `false`    | Opt out of the `fallback-src` logic and use the `CImage` directly                                                                                                  |