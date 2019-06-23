---
path: "/content/Stepper/"
date: "2019-07-01"
title: "Stepper"
tags: ["components"]
---

A Stepper allows a user to choose a number between a minimum and maximum value.
It may be "stepped", so that its value only changes in increments of a given
number.

| Prop                | Type       | Notes                      |
| :------------------ | :--------- | :------------------------- |
| **`value`**         | `number`   |                            |
| **`disabled`**      | `boolean`  |                            |
| **`validation`**    | `function` |                            |
| **`onValueChange`** | `function` |                            |
| **`min`**           | `number`   | The input's minimum value. |
| **`max`**           | `number`   | The input's maximum value. |
| **`step`**          | `number`   | The input's step.          |

See the [Inputs](content/Inputs) section for more on how inputs work in Learn.

## Examples

```tsx
// Overrides

import { Override } from "framer";

export function StepperExample(): Override {
  return {
    min: 0,
    max: 100,
    value: 60,
    step: 1,
    validation: value => value <= 10,
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
				min={0}
				max={100}
        value={60}
        step={1}
				validation={(value) => value <= 10}
				onValueChange={handleValueChange}
				center
			/>
		</Frame>
	)
}
```
