---
path: '/content/RadioGroup/'
date: '2019-07-01'
title: 'RadioGroup'
tags: ['components']
---


A **RadioGroup** takes a set of options and turns them into a set of [RowItem](https://github.com/framer/framer-education/wiki/RowItem)s, each of which displays the option together with a [Radio](https://github.com/framer/framer-education/wiki/Radio). The RadioGroup’s value is the currently selected option.

## Props

| Prop                | Type       | Notes                                           |
| :------------------ | :--------- | :---------------------------------------------- |
| **`options`**       | `string[]` | The group’s options.                            |
| **`value`**         | `string`   | The currently selected option, if any.          |
| **`disabled`**      | `boolean`  |                                                 |
| **`validation`**    | `function` | A callback that returns `true` or `false`.      |
| **`onValueChange`** | `function` | The callback to fire when checked or unchecked. |

See the [Inputs](https://github.com/framer/framer-education/wiki/Inputs) section for more on how inputs work in Learn.

## Examples

```tsx
// Overrides

import { Override } from "framer"

export function RadioGroupExample(): Override {
	return {
		options: ["Paris", "New York", "London", "Hong Kong"],
		onValueChange: value => console.log(value),
	}
}
```

```tsx
// Code component

import * as React from "react"
import { Frame } from "framer"
import { RadioGroup } from "@framer/steveruizok.education/code/RadioGroup"

export const RadioGroupExample = props => {
	const handleValueChange = (value, valid) => {
		console.log(value)
	}

	return (
		<Frame size="100%" background="none">
			<RadioGroup
				center
				options={["Paris", "New York", "London", "Hong Kong"]}
				onValueChange={handleValueChange}
			/>
		</Frame>
	)
}
```
