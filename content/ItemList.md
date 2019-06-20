---
path: "/content/ItemList/"
date: "2019-07-01"
title: "ItemList"
tags: ["components"]
---

🚧 👷‍♂️`Under Construction` 👷‍♀️🚧

```tsx
type Props = Partial<ScrollProps> & {
  items: Item[];
};
```

Each item:

```tsx
type Item = {
  text: string;
  onTap: (item) => void;
  component: string;
  icon: string;
  value: number | boolean;
  onValueChange: (value) => void;
};
```
