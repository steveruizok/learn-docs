---
path: "/content/Radio/"
date: "2019-07-01"
title: "Radio"
tags: ["components"]
---

Tapping on a **Radio** will turn it on. Radio inputs are normally used as a
group in order to capture a mutually-exclusive choice, as is done in the
[RadioGroup](https://framer-learn-docs.netlify.com/content/RadioGroup)
component.

| Prop                | Type       | Notes |
| :------------------ | :--------- | :---- |
| **`value`**         | `boolean`  |       |
| **`disabled`**      | `boolean`  |       |
| **`validation`**    | `function` |       |
| **`onValueChange`** | `function` |       |

See the [Inputs](content/Inputs/) section for more on how inputs work in Learn.

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
// @ts-ignore
import { Radio } from "@framer/steveruizok.education/code";

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
