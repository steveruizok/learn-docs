---
path: "/content/Radio/"
date: "2019-07-01"
title: "Radio"
tags: ["components"]
---

Tapping on a **Radio** will turn it on. Radio inputs are normally used as a group in order to capture a mutually-exclusive choice, as is done in the [RadioGroup](https://github.com/framer/framer-education/wiki/RadioGroup) component.

| Prop                | Type       | Notes                                       |
| :------------------ | :--------- | :------------------------------------------ |
| **`value`**         | `boolean`  | Whether the Radio is checked.               |
| **`disabled`**      | `boolean`  |                                             |
| **`validation`**    | `function` | A callback that returns `true` or `false`.  |
| **`onValueChange`** | `function` | The callback to fire when turned on or off. |

See the [Inputs](https://github.com/framer/framer-education/wiki/Inputs) section for more on how inputs work in Learn.

## Examples

```tsx
// Override

import { Override } from "framer";

export function RadioExample(): Override {
  return {
    onValueChange: value => console.log("Value: " + value)
  };
}
```

```tsx
// Code Component

import * as React from "react";
import { Frame } from "framer";
import { Radio } from "@framer/steveruizok.education/code/Radio";

export const RadioExample = props => {
  const handleValueChange = (value, valid) => {
    console.log(`Value: ${value}`);
  };

  return (
    <Frame size="100%" background="none">
      <Radio center onValueChange={handleValueChange} />
    </Frame>
  );
};
```
