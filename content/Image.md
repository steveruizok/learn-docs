---
path: '/content/Image/'
date: '2019-07-01'
title: 'Image'
tags: ['components']
---


An **Image** shows an image with an optional color overlay. It may also have a [Favorite]().

## Props

| Prop                   | Type       | Notes                                   |
| :--------------------- | :--------- | :-------------------------------------- |
| **`image`**            | `string`   | A source URL for the Image's image.     |
| **`overlay`**          | `boolean`  |                                         |
| **`color`**            | `string`   | A color to use for the image's overlay. |
| **`favorite`**         | `boolean`  | Whether or not to use a Favorite.       |
| **`isFavorite`**       | `boolean`  | Whether the Image is favorited or not.  |
| **`onFavoriteChange`** | `function` |                                         |

## Examples

```tsx
// Override

import { Override } from "framer"
import { colors } from "@framer/steveruizok.education/code/canvas"

export function ImageExample(): Override {
	return {
		image: false,
		overlay: true,
		color: colors.Primary,
		onValueChange: value => console.log("Value: " + value),
	}
}
```

```tsx
// Code Component

import * as React from "react"
import { Frame } from "framer"
import { Favorite } from "@framer/steveruizok.education/code/Favorite"

export const RadioExample = props => {
	const handleValueChange = (value, valid) => {
		console.log(`Value: ${value}`)
	}

	return (
		<Frame size="100%" background="none">
			<Favorite center onValueChange={handleValueChange} />
		</Frame>
	)
}
```
