---
path: "/content/Switch/"
date: "2019-07-01"
title: "Switch"
tags: ["components"]
---

A Switch allows a user to toggle between two values: `true` and `false`.

| Prop                | Type       | Notes |
| :------------------ | :--------- | :---- |
| **`value`**         | `number`   |       |
| **`disabled`**      | `boolean`  |       |
| **`validation`**    | `function` |       |
| **`onValueChange`** | `function` |       |

See the [Inputs](content/Inputs) section for more on how inputs work in Learn.

## Examples

```tsx
// Overrides

import { Override } from "framer";

export function SwitchExample(): Override {
  return {
    value: true,
    disabled: false,
    validation: value => true,
    onValueChange: (value, valid) =>
      console.log("Value: " + value, "Valid" + valid)
  };
}
```

```tsx
// Code component

import * as React from 'react'
import { Frame } from 'framer'
// @ts-ignore
import { Slider } from '@framer/steveruizok.education/code'

export const StepperExample = (props) => {

  const handleValueChange = (value, valid) =>
			console.log('Value: ' + value, 'Valid' + valid),
	}

	return (
		<Frame size="100%" background="none">
			<Slider
				value={true}
        disabled={false}
				validation={(value) => true}
				onValueChange={handleValueChange}
				center
			/>
		</Frame>
	)
}
```
