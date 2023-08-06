---
title: Accordion
description: Accordion component
version: 2.0+
---
# Accordion

An accordion is a vertically stacked set of interactive headings containing a title, content snippet, or thumbnail representing a section of content.

## Import

Chakra UI Vue exports 5 accordion-related components.

- **CAccordion**: The wrapper that contains accordion items.
- **CAccordionItem**: A single accordion item.
- **CAccordionButton**: The button that toggles the expand/collapse state of the accordion item. This button must be wrapped in an element with role heading.
- **CAccordionPanel**: The container for the details to be revealed.
- **CAccordionIcon**: A chevron-down icon that rotates based on the expanded/collapsed state

```js
import {
  CAccordion,
  CAccordionItem,
  CAccordionButton,
  CAccordionPanel,
  CAccordionIcon,
} from "@chakra-ui/vue-next"
```

## Usage

By default, only one item may be expanded and it can only be collapsed again by expanding another.

`CAccordion` supports keyboard navigation between accordion buttons. Pressing the `up` or `down` key will move focus between accordion buttons. 

::showcase

:simple-accordion{width=full}

::

```html
<CAccordion>
  <CAccordionItem>
    <CAccordionButton>
      Watercraft
    </CAccordionButton>
    <CAccordionPanel> Sample accordion content </CAccordionPanel>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionButton>
      Automobiles
    </CAccordionButton>
    <CAccordionPanel> Sample accordion content </CAccordionPanel>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionButton>
      Aircrafts
    </CAccordionButton>
    <CAccordionPanel> Sample accordion content </CAccordionPanel>
  </CAccordionItem>
</CAccordion>
```

## Expand multiple items at once

If you set `allow-multiple` to `true` then the accordion will permit multiple items to be expanded at once.


::showcase

:simple-accordion{width="full" allow-multiple=true}

::

```html
<CAccordion allow-multiple>
  <CAccordionItem>
    <CAccordionButton>
      Watercraft
    </CAccordionButton>
    <CAccordionPanel> Sample accordion content </CAccordionPanel>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionButton>
      Automobiles
    </CAccordionButton>
    <CAccordionPanel> Sample accordion content </CAccordionPanel>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionButton>
      Aircrafts
    </CAccordionButton>
    <CAccordionPanel> Sample accordion content </CAccordionPanel>
  </CAccordionItem>
</CAccordion>
```

## Toggle each accordion item

If you set `allow-toggle` to `true`, any expanded item may be collapsed again.


::showcase

:simple-accordion{width="full" allow-toggle=true}

::

```html
<CAccordion allow-toggle>
  <CAccordionItem>
    <CAccordionButton>
      Watercraft
    </CAccordionButton>
    <CAccordionPanel> Sample accordion content </CAccordionPanel>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionButton>
      Automobiles
    </CAccordionButton>
    <CAccordionPanel> Sample accordion content </CAccordionPanel>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionButton>
      Aircrafts
    </CAccordionButton>
    <CAccordionPanel> Sample accordion content </CAccordionPanel>
  </CAccordionItem>
</CAccordion>
```

## Styling the expanded state

The `CAccordionButton` component has `aria-expanded` set to `true` or `false` depending on the state of the `CAccordionItem`. Use the style prop `_expanded` to style this state.

::showcase

:expanded-style{width="full" allow-toggle=true}

::

## Accessibility

Pressing `space` or `enter` when focus is on the accordion panel header will toggle (expand or collapse) the accordion.