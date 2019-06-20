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
