---
path: "/content/RowItem/"
date: "2019-07-01"
title: "RowItem"
tags: ["components"]
---

A **RowItem** displays text on the left side and an optional component on the
right side: a Checkbox, Radio, Switch or Icon.

| Prop                | Type       | Notes                                   |
| :------------------ | :--------- | :-------------------------------------- |
| **`text`**          | `string`   |                                         |
| **`component`**     | `string`   | The component to display, if any.       |
| **`value`**         | `boolean`  | The value to pass to the component.     |
| **`disabled`**      | `boolean`  |                                         |
| **`validation`**    | `function` |                                         |
| **`onValueChange`** | `function` |                                         |
| **`paddingLeft`**   | `number`   | The left padding on the RowItem's text. |

See the [Inputs](https://github.com/framer/framer-education/wiki/Inputs) section
for more on how inputs work in Learn.

## Examples

```tsx
// Overrides

import { Override } from "framer";

export function RadioGroupExample(): Override {
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
import { RadioGroup } from "@framer/steveruizok.education/code/RadioGroup";

export const RadioGroupExample = props => {
  const handleValueChange = (value, valid) => {
    console.log(value);
  };

  return (
    <Frame size="100%" background="none">
      <RadioGroup
        center
        options={["Paris", "New York", "London", "Hong Kong"]}
        onValueChange={handleValueChange}
      />
    </Frame>
  );
};
```
