---
path: "/content/ChipList/"
date: "2019-07-01"
title: "ChipList"
tags: ["components"]
---

🚧 👷‍♂️`Under Construction` 👷‍♀️🚧

```tsx
type Props = FrameProps & {
  chips: Array<string | ChipItem>;
  type: string;
  clearable: boolean;
  onTapChip: (item: ChipItem) => void;
  onValueChange: (items: ChipItem[]) => void;
};
```

A **ChipList** is a horizontal list of [Chip](content/Chip)s.

| Prop              | Type                     | Notes                                                    |
| :---------------- | :----------------------- | :------------------------------------------------------- |
| **`chips`**       | `string[]` or `object[]` | See _Chips_ below.                                       |
| **`type`**        | `string`                 | The type to use for all chips (unless provided).         |
| **`clearable`**   | `boolean`                | Whether each chip should be clearable (unless provided). |
| **`onTapChip`**   | `function`               | A callback to call when the user taps a chip.            |
| **`onClearChip`** | `function`               | A callback to call when the user clears a chip.          |

## Chips

The `chips` prop accepts an array of either strings or objects. If provided
strings, each string will be used as the `text` prop of a [Chip]("./Chip")
instance. If provided objects, each object will be used as the props for a
[Chip]("./Chip") instance.

## Examples

#### Overrides

```tsx
// App.tsx

import { Override } from "framer";

// Overrides

export function ChipListExampleA(): Override {
  return {
    chips: ["London", "Transportation", "News"]
  };
}

export function ChipListExampleB(): Override {
  return {
    chips: [
      {
        text: "London",
        type: "primary"
      },
      {
        text: "Transportation",
        type: "primary"
      },
      {
        text: "News",
        type: "secondary"
      }
    ]
  };
}
```
