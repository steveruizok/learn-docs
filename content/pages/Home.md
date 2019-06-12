---
path: '/content/Home/'
date: '2019-07-01'
title: 'Home'
tags: []
---


Welcome to the **Learn Design System** docs.

In this wiki, you’ll find information on each component included in the Learn Design System, together with information on colors, inputs and patterns of use.

# Installation

Open Framer X Store and [install the Learn package](https://store.framer.com/package/steveruizok/education).

# Usage

## Components

Once you’ve installed the Learn package, you can use the components from the Learn package just as you would any other component:

- drag an instance of a component onto the **canvas**
- adjust their props through the component's **property controls**
- connect component instances through **overrides**

The package currently includes:

- Shared Colors
- Icon
- Text
- Image
- Favorite
- Link
- Switch
- Button
- Checkbox
- Radio
- CheckboxGroup
- RadioGroup
- Slider
- Stepper
- TextInput
- Select
- Segment
- Tabs
- Tab Bar
- Navigation Bar
- Card
- Map

To use these components inside of your code components, import them from `"@framer/steveruizok.education/code”`.

```jsx
import * as React from "react"
import { Frame } from "framer"
import { Button, Icon } from "@framer/steveruizok.education/code”

export function MyComponent (props) {
  return (
    <Frame size={“100%”}>
      <Button text=“Click here!”/>
      <Icon icon=“accessible”/>
    </Frame>
  }
}
```

## Colors

You can use the same import to pull the shared colors:

```tsx
import { Override } from “framer"
import { colors } from "@framer/steveruizok.education/code”

export function ColorOverride: Override () {
  return {
    color: colors.Primary
  }
}
```

## Utils

This package also includes several helper utilities.

```tsx
import * as React from "react"
import { Stack, Frame } from "framer"
import { range } from "@framer/steveruizok.education/code”

export function MyComponent (props) {
  return (
    <Stack size={“100%”}>
      { range(10).map(  i => <Frame/>{i}</Frame>) }
    </Stack>
  }
}
```

Learn currently includes:

- `range`
- `rangeFrom`
- `clamp`
- `normalize`
- `pull`
- `pullAtIndex`

# Community

Visit our [Spectrum channel](https://spectrum.chat/framer/learn?tab=posts) to discuss the Learn Design System, connect with other users or find help with your projects.

If you spot any errors in the package or in these docs, please let me know in the Spectrum channel, on Twitter at [@steveruizok](https://twitter.com/steveruizok) or by email at steve@framer.com.
