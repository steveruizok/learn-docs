---
path: "/content/CheckboxGroup/"
date: "2019-07-01"
title: "CheckboxGroup"
tags: ["components"]
---

A **CheckboxGroup** takes a set of options and turns them into a set of
[RowItem](content/RowItem)s, each of which displays the option together with a
[Checkbox](content/Checkbox). The CheckboxGroup’s value is an array containing
all checked options.

| Prop                | Type       | Notes                                             |
| :------------------ | :--------- | :------------------------------------------------ |
| **`options`**       | `string[]` | The input's options.                              |
| **`value`**         | `string`   | The input's selected option.                      |
| **`required`**      | `boolean`  | Whether to be invalid when no option is selected. |
| **`disabled`**      | `boolean`  |                                                   |
| **`validation`**    | `function` |                                                   |
| **`onValueChange`** | `function` |                                                   |

See the [Inputs](content/Inputs/) section for more on how inputs work in Learn.

## Examples

```tsx
// Overrides
import { Override } from "framer";

export function CheckboxGroupExample(): Override {
  return {
    options: ["Paris", "New York", "London", "Hong Kong"],
    onValueChange: value => console.log(value)
  };
}
```

```tsx
// Code Overrides
import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { CheckboxGroup } from "@framer/steveruizok.education/code";

export const CheckboxGroupExample = props => {
  const handleValueChange = (value, valid) => {
    console.log(value);
  };

  return (
    <Frame size="100%" background="none">
      <CheckboxGroup
        center
        options={["Paris", "New York", "London", "Hong Kong"]}
        onValueChange={handleValueChange}
      />
    </Frame>
  );
};
```
