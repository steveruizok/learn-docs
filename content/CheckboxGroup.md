---
path: "/content/CheckboxGroup/"
date: "2019-07-01"
title: "CheckboxGroup"
tags: ["components"]
---

A **CheckboxGroup** takes a set of options and turns them into a set of [RowItem](https://github.com/framer/framer-education/wiki/RowItem)s, each of which displays the option together with a [Checkbox](https://github.com/framer/framer-education/wiki/Checkbox). The CheckboxGroup’s value is an array containing all checked options.

| Prop                | Type       | Notes                                           |
| :------------------ | :--------- | :---------------------------------------------- |
| **`options`**       | `string[]` | The group’s options.                            |
| **`value`**         | `string[]` | Which options have been checked.                |
| **`disabled`**      | `boolean`  |                                                 |
| **`validation`**    | `function` | A callback that returns `true` or `false`.      |
| **`onValueChange`** | `function` | The callback to fire when checked or unchecked. |

See the [Inputs](https://github.com/framer/framer-education/wiki/Inputs) section for more on how inputs work in Learn.

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
