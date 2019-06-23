---
path: "/content/ItemList/"
date: "2019-07-01"
title: "ItemList"
tags: ["components"]
---

An **ItemList** is a scrollable stack of [RowItem]("./RowItem")s.

| Prop            | Type       | Notes                                                |
| :-------------- | :--------- | :--------------------------------------------------- |
| **`items`**     | `object[]` | See _Items_ below.                                   |
| **`emptyText`** | `string`   | The text to display when the `items` array is empty. |

## Items

The `items` prop accepts an array of objects. Each object in the array is the
props for a [RowItem](content/RowItem) instance.

## Examples

#### Overrides

```tsx
// App.tsx

import { Override, Data } from 'framer'

// State

const appState = Data({
  mode: "dark",
  count: 1
})

// Event handlers

const handleLinkTap = () => {
  console.log("Tapped!")
}

const setDarkMode = (value: boolean) => {
  appState.mode = value ? "dark" : "light"
}

const setCount = (value: boolean) => {
  appState.count = value
}

// Overrides

export function ItemListExample(): Override {
	return {
		items: [
			{
				text: 'List Item',
			},
			{
				text: 'Link',
        component: 'icon',
        icon: "chevron-right"
        onTap: handleLinkTap
			},
			{
				text: 'Dark Mode',
        component: 'switch',
        value: appState.mode === "dark"
        onValueChange: setDarkMode
			},
			{
				text: 'Count',
        component: 'stepper',
        min: 0,
        max: 10,
        step: 1,
        value: appState.count,
        onValueChange: setCount
			}
		],
	}
}
```
