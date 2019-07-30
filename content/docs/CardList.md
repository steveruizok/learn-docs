---
path: "/content/CardList/"
date: "2019-07-01"
title: "CardList"
tags: ["components"]
---

A **CardList** is a scrollable stack of cards.

| Prop            | Type       | Notes                                                |
| :-------------- | :--------- | :--------------------------------------------------- |
| **`cards`**     | `object[]` | See _Cards_ below.                                   |
| **`emptyText`** | `string`   | The text to display when the `cards` array is empty. |

## Cards

The `cards` prop accepts an array of objects. Each object in the array is the
props for a [Card](Card) instance.

## Examples

#### Overrides

```tsx
// App.tsx

import { Override } from 'framer'

// Event Handlers

const handleFavoriteChange = (isFavorite) => {
	console.log("Card C is favorite: " + isFavorite)
}

// Overrides

export function CardListExample(): Override {
	return {
		cards: [
			{
				title: 'Card A',
			},
			{
				title: 'Card B',
				body: "This is the list's second card",
			},
			{
				image: 'http://imgur.com/exampleImage',
				favorite: true,
				isFavorite: true,
				onFavoriteChange: handleFavoriteChange
				},
			},
		],
	}
}
```
