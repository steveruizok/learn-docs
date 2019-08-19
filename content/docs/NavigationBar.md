---
path: '/content/NavigationBar/'
date: '2019-07-01'
title: 'NavigationBar'
tags: ['components']
---

A **NavigationBar** models the top navigation bar of an iOS app. The bar has a
title, an optional subtitle, and two tappable areas on its left and right sides.
Each of these areas may have a link, icon or both. The bar has a taller “large”
mode that sits the title below the bar.

| Prop             | Type       | Notes                         |
| :--------------- | :--------- | :---------------------------- |
| **`title`**      | `string`   | Whether the Radio is checked. |
| **`subtitle`**   | `string`   |                               |
| **`showLeft`**   | `boolean`  |                               |
| **`leftLink`**   | `string`   |                               |
| **`leftIcon`**   | `string`   | See _Icon_ below.             |
| **`onLeftTap`**  | `function` |                               |
| **`showRight`**  | `boolean`  |                               |
| **`rightLink`**  | `string`   |                               |
| **`rightIcon`**  | `string`   | See _Icon_ below.             |
| **`onRightTap`** | `function` |                               |
| **`large`**      | `boolean`  |                               |

### leftIcon and rightIcon

The `icon` prop can accept either `“none”` (for no icon) or one of the Material
Design Icon names from the list of [Icon Names](docs/IconNames).

### showLeft and showRight

These properties will show whether or not to display the links' content. For
example, when `leftLink` is `false`, the left will be hidden. This provides an
alternative to clearing the values of `leftIcon`, `onLeftTap`, and `leftLink`.

```tsx
// Override

import { Override } from "framer"

export function NavigationBarExample(): Override {
	return {
    leftLink: "Back",
    leftIcon: "chevron_left",
    onLeftTap: () => { appState.page = 0 }
    showLeft: appState.page > 0
	}
}
```

## Examples

```tsx
// Override

import { Override } from "framer"

export function NavigationBarExample(): Override {
	return {
		title: "Home",
    leftLink: "Back",
    leftIcon: "chevron_left",
    onLeftTap: () => console.log("Tapped left!")
    rightLink: null,
    rightIcon: "edit",
    onRightTap: () => console.log("Tapped right!")
  	large: false
	}
}
```

```tsx
// Code Component

import * as React from 'react'
import { Frame } from 'framer'
// @ts-ignore
import { NavigationBar } from '@framer/steveruizok.education/code'

export const RadioExample = (props) => {
	return (
		<Frame size="100%" background="none">
			<NavigationBar
				title="Home"
				leftLink="Back"
				leftIcon="chevron_left"
				onLeftTap={() => console.log('Tapped left!')}
				rightLink={null}
				rightIcon="edit"
				onRightTap={() => console.log('Tapped right!')}
				large={false}
			/>
		</Frame>
	)
}
```
