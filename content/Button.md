---
path: "/content/button/"
date: "2019-07-01"
title: "Button"
tags: ["components"]
---

A **Button** can display either text or an icon. It can be tapped and will run
an `onTap` callback when tapped. It may optionally be toggled with each tap.

| Prop           | Type       | Notes                                                                   |
| :------------- | :--------- | :---------------------------------------------------------------------- |
| **`text`**     | `string`   |                                                                         |
| **`icon`**     | `string`   | See _Icon_ below.                                                       |
| **`type`**     | `string`   | See _Type_ below.                                                       |
| **`toggle`**   | `boolean`  | Whether this button should toggle.                                      |
| **`toggled`**  | `boolean`  | Whether the button is or isn't toggled. Requires `toggle` to be `true`. |
| **`disabled`** | `boolean`  |                                                                         |
| **`onTap`**    | `function` | The callback function to fire when a user taps the button.              |

### Type

Button’s `type` prop can accept one of the following types:

| Button Type   |
| ------------- |
| `”primary"`   |
| `"secondary”` |
| `“accent”`    |
| `“neutral”`   |
| `“warn”`      |
| `“ghost”`     |

### Icon

The Button's `icon` prop can accept either `“none”` (for no icon) or one of the
Material Design Icon names from the list of [Icon Names](content/IconNames/).
Setting an icon will hide the Button’s text. The default value is `"none"`.

## Examples

#### Overrides

```tsx
// App.tsx

import { Override } from "framer";

export function ButtonExample(): Override {
  return {
    onTap: () => console.log("Tapped!")
  };
}

export function ToggkeButtonExample(): Override {
  return {
    toggle: true,
    toggled: false,
    onTap: toggled => console.log("Toggled: " + toggled)
  };
}
```

```tsx
// Overrides (with toggle)

import { Override } from "framer";

export const OnOffButton: Override = props => {
  return {
    toggle: true,
    onTap: toggled => {
      if (toggled) {
        console.log("Toggled on!");
      } else {
        console.log("Toggled off!");
      }
    }
  };
};
```

```tsx
// Code component

import * as React from "react";
import { Stack, Frame } from "framer";
// @ts-ignore
import { Button } from "@framer/steveruizok.education/code";

export const ButtonTest = props => {
  const handleContinue = () => {
    console.log("Continuing...");
  };

  const handleCancel = () => {
    console.log("Cancelling...");
  };

  return (
    <Stack width="100%" height="100%" direction="vertical">
      <Button
        width="100%"
        type="primary"
        text="Continue"
        onTap={handleContinue}
      />
      <Button
        width="100%"
        type="secondary"
        text="Cancel"
        onTap={handleCancel}
      />
    </Stack>
  );
};
```

#### Code Component

```tsx
// Code component (with toggle)

import * as React from "react";
import { Stack, Frame } from "framer";
import { Button } from "@framer/steveruizok.education/code";

export const ButtonTest = props => {
  const [state, setState] = React.useState({
    toggled: true
  });

  const handleTap = isToggled => {
    setState({ toggled: isToggled });
  };

  return (
    <Stack width="100%" height="100%" direction="vertical">
      <Button
        width="100%"
        type="primary"
        text="Toggle"
        toggle={true}
        toggled={state.toggled}
        onTap={handleTap}
      />
    </Stack>
  );
};
```
