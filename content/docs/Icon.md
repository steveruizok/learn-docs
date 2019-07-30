---
path: "/content/Icon/"
date: "2019-07-01"
title: "Icon"
tags: ["components"]
---

An **Icon** displays a Material Design Icon.

| Prop        | Type     | Notes                                          |
| :---------- | :------- | :--------------------------------------------- |
| **`icon`**  | `string` | A Material Design Icon name. See _Icon_ below. |
| **`color`** | `string` | Any color.                                     |
| **`size`**  | `number` | The size of the icon.                          |

### Icon

The `icon` prop can accept either `“none”` or one of the Material Design Icon
names from the list of
[Icon Names](https://framer-learn-docs.netlify.com/content/IconNames/).

## Examples

```tsx
// Overrides

import { Override } from "framer";
import { colors } from "@framer/steveruizok.education/code";

export function IconExample(): Override {
  return {
    color: colors.Primary,
    icon: "accessible",
    size: 24
  };
}
```

```tsx
// Code component

import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { colors, Icon } from "@framer/steveruizok.education/code";

export const IconExample = props => {
  return (
    <Frame size="100%" background="none">
      <Icon center color={colors.Primary} icon="accessible" size={24} />
    </Frame>
  );
};
```
