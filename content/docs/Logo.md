---
path: "/content/Logo/"
date: "2019-07-01"
title: "Logo"
tags: ["components"]
---

A **Logo** returns an SVG logo for the Learn Design System. It can be flat (all
one color).

| Prop       | Type      | Notes    |
| :--------- | :-------- | :------- |
| **`flat`** | `boolean` |          |
| **`fill`** | `string`  | A color. |

## Examples

```tsx
// Overrides

import { Override } from "framer";
// @ts-ignore
import { colors } from "@framer/steveruizok.education/code";

export function LogoExample(): Override {
  return {
    flat: true,
    fill: colors.Warn
  };
}
```

```tsx
// Code component

import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { Logo, colors } from "@framer/steveruizok.education/code";

export const LogoExample = props => {
  return (
    <Frame size="100%" background="none">
      <Logo center flat fill={colors.Warn} />
    </Frame>
  );
};
```
