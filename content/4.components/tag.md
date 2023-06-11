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
<CTag>Sample Tag</CTag>
```

### With custom attributes :

::showcase
  ::tag{size="md" variant="solid" color-scheme="teal"}
    Sample tag
  ::
::

```html
<CTag size="md" variant="solid" color-scheme="teal">Sample Tag</CTag>
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
<CTag size="sm" variant="solid" color-scheme="teal">Sample Tag</CTag>
<CTag size="md" variant="solid" color-scheme="teal">Sample Tag</CTag>
<CTag size="lg" variant="solid" color-scheme="teal">Sample Tag</CTag>
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
<CTag size="sm" color-scheme="purple">
  <CTagLeftIcon name="add" />
  <CTagLabel>Sample Tag</CTagLabel>
</CTag>
<CTag size="md" color-scheme="purple">
  <CTagLeftIcon name="add" />
  <CTagLabel>Sample Tag</CTagLabel>
</CTag>
<CTag size="lg" color-scheme="purple">
  <CTagLeftIcon name="add" />
  <CTagLabel>Sample Tag</CTagLabel>
</CTag>
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
<CTag size="lg" variant="solid" color-scheme="green">
  <CTagLabel>Sample Tag</CTagLabel>
  <CTagRightIcon name="check"/>
</CTag>
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
<CTag size="sm" color-scheme="blue">
  <CTag-label>Sample Tag</CTag-label>
  <CTag-close-button />
</CTag>

<CTag size="md" color-scheme="blue">
  <CTag-label>Sample Tag</CTag-label>
  <CTag-close-button />
</CTag>

<CTag size="lg" color-scheme="blue">
  <CTag-label>Sample Tag</CTag-label>
  <CTag-close-button />
</CTag>
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
<CTag border-radius="full">
  <CAvatar 
    name="Zakaria Sahmane" 
    ml="-1"
    mr="2" 
    alt="Zakaria Sahmane" 
    src="https://avatars.githubusercontent.com/u/10008963?v=4" 
    size="xs" />
  <CTagLabel>Sample Tag</CTagLabel>
</CTag>
```