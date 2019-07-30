---
path: "/content/Favorite/"
date: "2019-07-01"
title: "Favorite"
tags: ["components"]
---

Tapping on a **Favorite** will toggle it between on and off.

| Prop                | Type       | Notes |
| :------------------ | :--------- | :---- |
| **`value`**         | `boolean`  |       |
| **`onValueChange`** | `function` |       |

## Examples

```tsx
// Override

import { Override } from "framer";

export function FavoriteExample(): Override {
  return {
    value: false,
    onValueChange: value => console.log("Value: " + value)
  };
}
```

```tsx
// Code Component

import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { Favorite } from "@framer/steveruizok.education/code";

export const FavoriteExample = props => {
  const handleValueChange = (value, valid) => {
    console.log(`Value: ${value}`);
  };

  return (
    <Frame size="100%" background="none">
      <Favorite center onValueChange={handleValueChange} />
    </Frame>
  );
};
```
