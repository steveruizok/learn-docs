---
path: "/content/Link/"
date: "2019-07-01"
title: "Link"
tags: ["components"]
---

A **Link** displays either text or an icon. It can be tapped and will run an
`onTap` callback when tapped.

| Prop           | Type                  | Notes                                                                                      |
| :------------- | :-------------------- | :----------------------------------------------------------------------------------------- |
| **`text`**     | `string`              |                                                                                            |
| **`icon`**     | `string`              | The name of the icon to display (see _Icon_ below).                                        |
| **`type`**     | `string`              | One of the four valid types (see _Type_ below).                                            |
| **`disabled`** | `boolean`             |                                                                                            |
| **`resize`**   | `boolean` or `string` | Whether to auto-resize the width of the link.                                              |
| **`onResize`** | `function`            | A callback, called with the link's height and width when the Link first mounts or resizes. |
| **`onTap`**    | `function`            | The callback function to fire when a user taps the Link.                                   |

### Icon

The Link's `icon` prop can accept either `“none”` or one of the Material Design
Icon names from the list of [Icon Names](content/IconNames/). Setting an icon
will hide the Button’s text.

### Type

Link’s `type` prop can accept one of the following types:

| Button Type   |
| ------------- |
| `”primary"`   |
| `"secondary”` |
| `“accent”`    |
| `“neutral”`   |
| `“warn”`      |
| `“ghost”`     |

### Resize

A link will always call its `onResize` callback when the Link first mounts. If
`resize` is true, the Link will have shrunk its width to fit its text content.

If you've created your Link instance from a code component, resizing will work
without any further steps. However, if you're overriding a Link that you've
created on the canvas, you'll need to pass the resized width back to the
component's container use the data from the `onResize` event, as shown below:s

Link’s `resize` prop can accept one of the following options:

| Button Type |
| ----------- |
| `true`      |
| `"width`    |
| `height`    |

```tsx
// Overrides

import * as React from "react" // ! important
import { Override } from "framer"

export function LinkResizeExample(props): Override {
	const [state, setState] = React.useState({
		width: props.width
	})

	const handleResize = (width, height) => {
		setState({
			width
		})
	}

	return {
		width,
		text: "Get started!"
		resize: true,
		onResize: handleResize,
	}
}
```

Note that in this example, we've imported `react` into our overrides file.

## Examples

```tsx
// Overrides

import { Override } from "framer"

export function LinkExample(): Override {
	return {
		text: "Get started!"
		type: "primary",
		// icon: "accessible",
		disabled: false,
		resize: true,
		onResize: (width, height) => console.log("Resized to: ", width, height),
		onTap: () => console.log("Tapped!"),
	}
}
```

```tsx
// Code component

import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { Link } from "@framer/steveruizok.education/code";

export const LinkExample = props => {
  const handleTap = () => {
    console.log("Tapped!");
  };

  return (
    <Frame size="100%" background="none">
      <Link center type="primary" onTap={handleTap} />
    </Frame>
  );
};
```
