---
path: "/content/Segment/"
date: "2019-07-01"
title: "Segment"
tags: ["components"]
---

A **Segment** is a group of options, presented as buttons. Only one option may be selected at once.

| Prop                | Type       | Notes                                       |
| :------------------ | :--------- | :------------------------------------------ |
| **`value`**         | `string`   | The selected option.                        |
| **`options`**       | `string`[] | The Segment’s options.                      |
| **`disabled`**      | `boolean`  |                                             |
| **`validation`**    | `function` | A callback that returns `true` or `false`.  |
| **`onValueChange`** | `function` | The callback to fire when turned on or off. |

See the [Inputs](https://github.com/framer/framer-education/wiki/Inputs) section for more on how inputs work in Learn.

## Examples

```tsx
// Override

import { Override } from "framer";

export function SegmentExample(): Override {
  return {
    options: ["Paris", "New York", "London", "Hong Kong"],
    onValueChange: value => console.log(value)
  };
}
```

```tsx
// Code component

import * as React from "react";
import { Frame } from "framer";
import { Segment } from "@framer/steveruizok.education/code/Segment";

export const SegmentExample = props => {
  const handleValueChange = (value, valid) => {
    console.log(value);
  };

  return (
    <Frame size="100%" background="none">
      <Segment
        center
        options={["Paris", "New York", "London", "Hong Kong"]}
        onValueChange={handleValueChange}
      />
    </Frame>
  );
};
```
