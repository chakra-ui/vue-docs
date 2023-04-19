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
<c-checkbox default-checked> Simple checkbox </c-checkbox>
```

### Disabled Checkbox

::showcase
  :disabled-checkbox
::

```html
<c-checkbox is-disabled> Disabled checkbox </c-checkbox> 
<c-checkbox is-disabled default-checked> Disabled checked </c-checkbox>
```

### Checkbox with custom color

You can override the color scheme of the `c-checkbox` to any color key specified
in `theme.colors`.

::showcase
  :colors-checkbox
::

```html
<c-stack spacing="5" direction="row">
  <c-checkbox color-scheme='red' default-checked>
    Red
  </c-checkbox>
  <c-checkbox color-scheme='green' default-checked>
    Green
  </c-checkbox>
</c-stack>
```

### Checkbox sizes

Pass the `size` prop to change the size of the `c-checkbox`. Values can be either
`sm`, `md` or `lg`.

::showcase
  :sizes-checkbox
::

```html
<c-wrap spacing="5" direction="row" align="center">
  <c-checkbox size='sm' color-scheme='red'>
    c-checkbox
  </c-checkbox>
  <c-checkbox size='md' color-scheme='green' default-checked>
    c-checkbox
  </c-checkbox>
  <c-checkbox size='lg' color-scheme='orange' default-checked>
    c-checkbox
  </c-checkbox>
</c-wrap>
```

### Invalid Checkbox

::showcase
  ::checkbox{is-invalid=true}
    Invalid checkbox
  ::
::

```html
<c-checkbox is-invalid> Invalid checkbox </c-checkbox>
```

### Changing the spacing

We added the `spacing` prop to customize the spacing between the `c-checkbox` and
label text.

::showcase
  ::checkbox{spacing="1rem"}
    Option
  ::
::

```html
<c-checkbox spacing='1rem'> Option </c-checkbox>
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
<c-checkbox icon-color='purple.500' icon-size='1rem' color-scheme="white">
  Option
</c-checkbox>
```

### Indeterminate

::showcase
  :indeterminate
::

```html
<template>
  <c-stack>
    <c-checkbox
      v-model="allChecked"
      :is-indeterminate="isIndeterminate"
      @change="
        (value) => {
          setCheckedItems([value, value])
        }
      "
    >
      Parent checkbox
    </c-checkbox>
    <c-stack pl="6" mt="1" spacing="1">
      <c-checkbox
        :model-value="checkedItems[0]"
        @change="
          (value) => {
            setCheckedItems([value, checkedItems[1]])
          }
        "
      >
        Child Checkbox 1
      </c-checkbox>
      <c-checkbox
        :model-value="checkedItems[1]"
        @change="
          (value) => {
            setCheckedItems([checkedItems[0], value])
          }
        "
      >
        Child Checkbox 2
      </c-checkbox>
    </c-stack>
  </c-stack>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"

import { CCheckbox } from "@chakra-ui/vue-next"

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
  <c-checkbox-group v-model="items" color-scheme="blue" size="lg">
    <c-stack>
      <c-checkbox value="naruto"> Naruto </c-checkbox>
      <c-checkbox value="sasuke"> Sasuke </c-checkbox>
      <c-checkbox value="kakashi"> Kakashi </c-checkbox>
    </c-stack>
  </c-checkbox-group>
```