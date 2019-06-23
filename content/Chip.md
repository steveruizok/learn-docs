---
path: "/content/Chip/"
date: "2019-07-01"
title: "Chip"
tags: ["components"]
---

🚧 👷‍♂️`Under Construction` 👷‍♀️🚧

```tsx
type Props = Partial<FrameProps> & {
    text: string
    type: string
    clearable: boolean
    onResize: (width: number, height: number) => void
    onClear: () => void
  }>;
```

A **Chip** is a auto-sizing text often used in [ChipList]("content/ChipList)s.

| Prop            | Type       | Notes                                                   |
| :-------------- | :--------- | :------------------------------------------------------ |
| **`text`**      | `string`   | The Chip's text.                                        |
| **`type`**      | `string`   | See _Type_ below.                                       |
| **`clearable`** | `boolean`  | Whether to display an button to clear the chip.         |
| **`onClear`**   | `function` | A callback to call when the user taps the clear button. |
| **`onResize`**  | `function` | A callback to call when the Chip resizes.               |

## Examples

#### Override

```tsx
// App.tsx

import { Override } from "framer";

// Overrides

export function ChipExample(): Override {
  return {
    text: "News",
    type: "primary",
    clearable: false
  };
}
```
