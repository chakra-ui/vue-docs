---
title: Aspect Ratio
description: Aspect ratio component
version: 2.0+
---

# Aspect Ratio

`CAspectRatio` component is used to embed responsive videos and maps, etc. 

## Import

```js
import { CAspectRatio } from '@chakra-ui/vue-next';
```

## Usage

### Embed Video

To embed a video with a specific aspect ratio, use a `CBox` as an `iframe` with src pointing to the link of the video.

Pass the `max-width` prop to `CAspectRatio` to control the width of the content.

::showcase
::aspect-ratio-e-video{width=full}
::
::

```html
<CAspectRatio max-w="600px" max-h="300px" :ratio="4 / 3">
    <CBox as="iframe" w="600px" h="500px" title="Chakra UI Vue" src="https://www.youtube.com/embed/UL9Fcx6qDdk"  allow-full-screen />
</CAspectRatio>
```

### Embed Image

 You can also embed image that has a 4:3 aspect ratio.

 ::showcase
::aspect-ratio-e-image{width=full}
::
::

```html
<CAspectRatio max-w="400px" :ratio="4 / 3">
    <CImage src="https://bit.ly/naruto-sage" alt="sage mode naruto" object-fit="cover" />
</CAspectRatio>
```

### Embed a responsive map

Here's how to embed a responsive Google map using `CAspectRatio`. To make the map take up the entire width, we can ignore the max-width prop.

::showcase
::aspect-ratio-e-map{width=full}
::
::
