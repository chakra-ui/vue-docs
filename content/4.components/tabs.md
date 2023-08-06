---
title: Tabs
description: Tabs component
version: 2.0+
---

# Tabs

An accessible tabs component.

The `CTab` and `CTabPanel` elements are associated by their order in the tree. None of the components are empty wrappers, each is associated with a real DOM element in the document, giving you maximum control over styling and composition.

## Import

```js
import { CTabs, CTabList, CTabPanels, CTab, CTabPanel } from "@chakra-ui/vue-next";
```

## Usage

::showcase
:simple-tabs{width=full}
::


```html
<template>
  <CBox w="600px">
    <CTabs>
      <CTabList v-model="selected">
        <CTab value='1'>One</CTab>
        <CTab value='2'>Two</CTab>
        <CTab value='3'>Three</CTab>
      </CTabList>

      <CTabPanels v-model="selected">
        <CTabPanel value='1'>
          <p>Panel One</p>
        </CTabPanel>
        <CTabPanel value='2'>
          <p>Panel Two</p>
        </CTabPanel>
        <CTabPanel value='3'>
          <p>Panel Three</p>
        </CTabPanel>
      </CTabPanels>
  </CTabs>
</CBox>
</template>

<script setup>
import { ref } from 'vue';
const selected = ref(1);
</script>
```

## Tab Variants

Tabs come in 6 different variants to style the tabs: `line`,`enclosed`, `enclosed-colored`, `soft-rounded`, `solid-rounded`, `unstyled`.

::showcase
::variant-tabs{width=full}
::
::

```html
<CBox w="600px">
  <CTabs variant="enclosed-colored">
    <CTabList v-model="selected">
      <CTab value='1'>One</CTab>
      <CTab value='2'>Two</CTab>
      <CTab value='3'>Three</CTab>
    </CTabList>

    <CTabPanels v-model="selected">
      <CTabPanel value='1'>
        <p>Panel One</p>
      </CTabPanel>
      <CTabPanel value='2'>
        <p>Panel Two</p>
      </CTabPanel>
      <CTabPanel value='3'>
        <p>Panel Three</p>
      </CTabPanel>
    </CTabPanels>
  </CTabs>
</CBox>
```

You can also change the color scheme for any specific variant by passing the `color-scheme`.
> The value of `color-scheme` must exist in the theme object, and must be a key in theme.colors that has the 50 - 900 color values.

::showcase
::colored-tabs{width=full}
::
::

```html
<CBox w="600px">
  <CTabs variant="solid-rounded" color-scheme="green">
    <CTabList v-model="selected">
      <CTab value='1'>One</CTab>
      <CTab value='2'>Two</CTab>
      <CTab value='3'>Three</CTab>
    </CTabList>

    <CTabPanels v-model="selected">
      <CTabPanel value='1'>
        <p>Panel One</p>
      </CTabPanel>
      <CTabPanel value='2'>
        <p>Panel Two</p>
      </CTabPanel>
      <CTabPanel value='3'>
        <p>Panel Three</p>
      </CTabPanel>
    </CTabPanels>
  </CTabs>
</CBox>
```

### Tab Sizes

You can change the size of the tab by passing `size` prop. We support 3 sizes `sm`, `md`, `lg`

::showcase
::sizes-tabs{width=full}
::
::

```html
<CBox w="600px">
  <CTabs variant="solid-rounded" color-scheme="green" size="sm">
    <CTabList v-model="selected">
      <CTab value='1'>One</CTab>
      <CTab value='2'>Two</CTab>
      <CTab value='3'>Three</CTab>
    </CTabList>

    <CTabPanels v-model="selected">
      <CTabPanel value='1'>
        <p>Panel One</p>
      </CTabPanel>
      <CTabPanel value='2'>
        <p>Panel Two</p>
      </CTabPanel>
      <CTabPanel value='3'>
        <p>Panel Three</p>
      </CTabPanel>
    </CTabPanels>
  </CTabs>
</CBox>
```

## Fitted Tabs
Stretch the tab list to fit the container by passing `is-fitted` prop.

::showcase
::fitted-tabs{width=full}
::
::
