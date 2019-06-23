---
path: "/content/Checkbox/"
date: "2019-07-01"
title: "Checkbox"
tags: ["components"]
---

Tapping on a **Checkbox** will toggled it between on or off.

| Prop                | Type       | Notes |
| :------------------ | :--------- | :---- |
| **`value`**         | `boolean`  |       |
| **`disabled`**      | `boolean`  |       |
| **`validation`**    | `function` |       |
| **`onValueChange`** | `function` |       |

See the [Inputs](content/Inputs) section for more on how inputs work in Learn.

## Examples

```tsx
import { Override } from "framer";

export function CheckboxExample(): Override {
  return {
    onValueChange: value => console.log("Value: " + value)
  };
}
```

```tsx
import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { Checkbox } from "@framer/steveruizok.education/code";

export const CheckboxExample = props => {
  const handleValueChange = (value, valid) => {
    console.log(`Checked: ${value}`);
  };

  return (
    <Frame size="100%" background="none">
      <Checkbox center onValueChange={handleValueChange} />
    </Frame>
  );
};
```
