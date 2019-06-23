---
path: "/content/RadioGroup/"
date: "2019-07-01"
title: "RadioGroup"
tags: ["components"]
---

A **RadioGroup** takes a set of options and turns them into a set of
[RowItem](https://framer-learn-docs.netlify.com/content/RowItem)s, each of which
displays the option together with a
[Radio](https://framer-learn-docs.netlify.com/content/Radio). The RadioGroup’s
value is the currently selected option.

| Prop                | Type       | Notes                                             |
| :------------------ | :--------- | :------------------------------------------------ |
| **`options`**       | `string[]` | The group’s options.                              |
| **`value`**         | `string`   | The currently selected option, if any.            |
| **`required`**      | `boolean`  | Whether to be invalid when no option is selected. |
| **`disabled`**      | `boolean`  |                                                   |
| **`validation`**    | `function` |                                                   |
| **`onValueChange`** | `function` |                                                   |

See the [Inputs](content/Inputs/) section for more on how inputs work in Learn.

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
// @ts-ignore
import { RadioGroup } from "@framer/steveruizok.education/code";

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
