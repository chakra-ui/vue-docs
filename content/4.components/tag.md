---
title: Tag
description: Tag component
version: 2.0+
---

# Tag

Tag component is used for items that need to be labeled, categorized, or organized using keywords that describe them.

## Import

This package exports the following components :

- **CTag** : The wrapper for all the tag elements.
- **CTagLabel** : The label for tag's text content.
- **CTagRightIcon** : The icon placed on the left side of the tag.
- **CTagLeftIcon** : The icon placed on the right side of the tag.
- **CTagCloseButton** : The close button for the tag.

## Usage

### Sample Tag :

::showcase
  ::tag
    Sample tag
  ::
::

```html
<c-tag>Sample Tag</c-tag>
```

### With custom attributes :

::showcase
  ::tag{size="md" variant="solid" color-scheme="teal"}
    Sample tag
  ::
::

```html
<c-tag size="md" variant="solid" color-scheme="teal">Sample Tag</c-tag>
```

## With different sizes : 

::showcase
  ::wrap{align="center" spacing="2"}
    ::tag{size="sm" variant="solid" color-scheme="teal"}
      Sample tag
    ::
    ::tag{size="md" variant="solid" color-scheme="teal"}
      Sample tag
    ::
    ::tag{size="lg" variant="solid" color-scheme="teal"}
      Sample tag
    ::
  ::
::

```html
<c-tag size="sm" variant="solid" color-scheme="teal">Sample Tag</c-tag>
<c-tag size="md" variant="solid" color-scheme="teal">Sample Tag</c-tag>
<c-tag size="lg" variant="solid" color-scheme="teal">Sample Tag</c-tag>
```

### With left icon

::showcase
  ::wrap{align="center" spacing="2"}
    ::tag{size="sm" variant="solid" color-scheme="purple"}
      :tag-left-icon{name="add"}
      ::tag-label
        Sample Tag
      ::
    ::
    ::tag{size="md" variant="solid" color-scheme="purple"}
      :tag-left-icon{name="add"}
      ::tag-label
        Sample Tag
      ::
    ::
    ::tag{size="lg" variant="solid" color-scheme="purple"}
      :tag-left-icon{name="add"}
      ::tag-label
        Sample Tag
      ::
    ::
  ::
::

```html
<c-tag size="sm" color-scheme="purple">
  <c-tag-left-icon name="add" />
  <c-tag-label>Sample Tag</c-tag-label>
</c-tag>
<c-tag size="md" color-scheme="purple">
  <c-tag-left-icon name="add" />
  <c-tag-label>Sample Tag</c-tag-label>
</c-tag>
<c-tag size="lg" color-scheme="purple">
  <c-tag-left-icon name="add" />
  <c-tag-label>Sample Tag</c-tag-label>
</c-tag>
```

### With right icon

::showcase
  ::wrap{align="center" spacing="2"}
    ::tag{size="sm" variant="solid" color-scheme="green"}
      ::tag-label
        Sample Tag
      ::
      :tag-right-icon{name="check"}
    ::
    ::tag{size="md" variant="solid" color-scheme="green"}
      ::tag-label
        Sample Tag
      ::
      :tag-right-icon{name="check"}
    ::
    ::tag{size="lg" variant="solid" color-scheme="green"}
      ::tag-label
        Sample Tag
      ::
      :tag-right-icon{name="check"}
    ::
  ::
::

```html
<c-tag size="lg" variant="solid" color-scheme="green">
  <c-tag-label>Sample Tag</c-tag-label>
  <c-tag-right-icon name="check"/>
</c-tag>
```

### With close button

::showcase
  ::wrap{align="center" spacing="2"}
    ::tag{size="sm" color-scheme="blue"}
      ::tag-label
        Sample Tag
      ::
      :tag-close-button
    ::
    ::tag{size="md" color-scheme="blue"}
      ::tag-label
        Sample Tag
      ::
      :tag-close-button
    ::
    ::tag{size="lg" color-scheme="blue"}
      ::tag-label
        Sample Tag
      ::
      :tag-close-button
    ::
  ::
::

```html
<c-tag size="sm" color-scheme="blue">
  <c-tag-label>Sample Tag</c-tag-label>
  <c-tag-close-button />
</c-tag>

<c-tag size="md" color-scheme="blue">
  <c-tag-label>Sample Tag</c-tag-label>
  <c-tag-close-button />
</c-tag>

<c-tag size="lg" color-scheme="blue">
  <c-tag-label>Sample Tag</c-tag-label>
  <c-tag-close-button />
</c-tag>
```

### With custom element

::showcase
  ::tag{size="lg" color-scheme="red" border-radius="full"}
    :avatar{name="Zakaria Sahmane" mr="2" ml="-1" alt="Zakaria Sahmane" src="https://avatars.githubusercontent.com/u/10008963?v=4" size="xs"}
    ::tag-label
      Sample Tag
    ::
  ::
::

```html
<c-tag border-radius="full">
  <c-avatar 
    name="Zakaria Sahmane" 
    ml="-1"
    mr="2" 
    alt="Zakaria Sahmane" 
    src="https://avatars.githubusercontent.com/u/10008963?v=4" 
    size="xs" />
  <c-tag-label>Sample Tag</c-tag-label>
</c-tag>
```