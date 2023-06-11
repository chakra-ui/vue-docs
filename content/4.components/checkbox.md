---
title: Checkbox
description:
  Checkbox component is used in forms when a user needs to select multiple
  values from several options.
version: 2.0+
---

# Checkbox

Checkbox component is used in forms when a user needs to select multiple values from several options.

## Import

```js
import { CCheckbox, CCheckboxGroup } from '@chakra-ui/vue'
```

## Usage

::showcase
  ::checkbox{default-checked=true}
    Simple checkbox
  ::
::

```html
<CCheckbox default-checked> Simple checkbox </CCheckbox>
```

### Disabled Checkbox

::showcase
  :disabled-checkbox
::

```html
<CCheckbox is-disabled> Disabled checkbox </CCheckbox> 
<CCheckbox is-disabled default-checked> Disabled checked </CCheckbox>
```

### Checkbox with custom color

You can override the color scheme of the `CCheckbox` to any color key specified
in `theme.colors`.

::showcase
  :colors-checkbox
::

```html
<CStack spacing="5" direction="row">
  <CCheckbox color-scheme='red' default-checked>
    Red
  </CCheckbox>
  <CCheckbox color-scheme='green' default-checked>
    Green
  </CCheckbox>
</CStack>
```

### Checkbox sizes

Pass the `size` prop to change the size of the `CCheckbox`. Values can be either
`sm`, `md` or `lg`.

::showcase
  :sizes-checkbox
::

```html
<CWrap spacing="5" direction="row" align="center">
  <CCheckbox size='sm' color-scheme='red'>
    CCheckbox
  </CCheckbox>
  <CCheckbox size='md' color-scheme='green' default-checked>
    CCheckbox
  </CCheckbox>
  <CCheckbox size='lg' color-scheme='orange' default-checked>
    CCheckbox
  </CCheckbox>
</CWrap>
```

### Invalid Checkbox

::showcase
  ::checkbox{is-invalid=true}
    Invalid checkbox
  ::
::

```html
<CCheckbox is-invalid> Invalid checkbox </CCheckbox>
```

### Changing the spacing

We added the `spacing` prop to customize the spacing between the `CCheckbox` and
label text.

::showcase
  ::checkbox{spacing="1rem"}
    Option
  ::
::

```html
<CCheckbox spacing='1rem'> Option </CCheckbox>
```

### Changing the icon color and size

You can customize the color and size of the check icon by passing the
`iconColor` and `iconSize` prop.

::showcase
  ::checkbox{icon-color="purple.500" icon-size="1rem" color-scheme="white"}
    Option
  ::
::

```html
<CCheckbox icon-color='purple.500' icon-size='1rem' color-scheme="white">
  Option
</CCheckbox>
```

### Indeterminate

::showcase
  :indeterminate
::

```html
<template>
  <CStack>
    <CCheckbox
      v-model="allChecked"
      :is-indeterminate="isIndeterminate"
      @change="
        (value) => {
          setCheckedItems([value, value])
        }
      "
    >
      Parent checkbox
    </CCheckbox>
    <CStack pl="6" mt="1" spacing="1">
      <CCheckbox
        :model-value="checkedItems[0]"
        @change="
          (value) => {
            setCheckedItems([value, checkedItems[1]])
          }
        "
      >
        Child Checkbox 1
      </CCheckbox>
      <CCheckbox
        :model-value="checkedItems[1]"
        @change="
          (value) => {
            setCheckedItems([checkedItems[0], value])
          }
        "
      >
        Child Checkbox 2
      </CCheckbox>
    </CStack>
  </CStack>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"

import { CCheckbox, CStack } from "@chakra-ui/vue-next"

const checkedItems = ref([false, false])
function setCheckedItems(value: boolean[]) {
  checkedItems.value = [value[0], value[1]]
}

const allChecked = computed(() => checkedItems.value.every(Boolean))
const isIndeterminate = computed(
  () => checkedItems.value.some(Boolean) && !allChecked.value
)
</script>
```

### Checkbox Group

Chakra exports a `CCheckboxGroup` component to help manage the checked state of
its children `CCheckbox` components and conveniently pass a few shared style
props to each. See the props table at the bottom of this page for a list of the
shared styling props.

::showcase
  :checkbox-group
::

```html
  <CCheckboxGroup v-model="items" color-scheme="blue" size="lg">
    <CStack>
      <CCheckbox value="naruto"> Naruto </CCheckbox>
      <CCheckbox value="sasuke"> Sasuke </CCheckbox>
      <CCheckbox value="kakashi"> Kakashi </CCheckbox>
    </CStack>
  </CCheckboxGroup>
```