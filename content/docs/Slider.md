---
path: "/content/Slider/"
date: "2019-07-01"
title: "Slider"
tags: ["components"]
---

A Slider allows a user to choose a number between a minimum and maximum value.
It may display titles for these values, and may be "stepped", so that its value
only changes in increments of a given number.

| Prop                | Type       | Notes                                                         |
| :------------------ | :--------- | :------------------------------------------------------------ |
| **`value`**         | `number`   |                                                               |
| **`disabled`**      | `boolean`  |                                                               |
| **`validation`**    | `function` |                                                               |
| **`onValueChange`** | `function` |                                                               |
| **`min`**           | `number`   | The input's minimum value.                                    |
| **`max`**           | `number`   | The input's maximum value.                                    |
| **`step`**          | `number`   | The input's step.                                             |
| **`titles`**        | `boolean`  | Whether to display titles for the input's min, max and value. |

See the [Inputs](https://framer-learn-docs.netlify.com/content/Inputs) section
for more on how inputs work in Learn.

## Examples

```tsx
// Overrides

import { Override } from "framer";

export function SliderExample(): Override {
  return {
    min: 0,
    max: 100,
    value: 60,
    step: 1,
    validation: value => value >= 50,
    onValueChange: (value, valid) =>
      console.log("Value: " + value, "Valid" + valid)
  };
}
```

```tsx
// Code component

import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { Slider } from "@framer/steveruizok.education/code";

export const SliderExample = props => {
  const handleValueChange = (value, valid) =>
    console.log("Value: " + value, "Valid: " + valid);

  return (
    <Frame size="100%" background="none">
      <Slider
        min={0}
        max={100}
        value={60}
        step={1}
        validation={value => value >= 50}
        onValueChange={handleValueChange}
        center
      />
    </Frame>
  );
};
```
