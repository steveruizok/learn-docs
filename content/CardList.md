---
path: "/content/CardList/"
date: "2019-07-01"
title: "CardList"
tags: ["components"]
---

🚧 👷‍♂️`Under Construction` 👷‍♀️🚧

```tsx
type Props = Partial<ScrollProps> & {
  items: Item[];
  emptyText: string;
};
```

Each item:

```tsx
type Item = {
  text: string;
  height: number;
  component: string;
  icon: string;
  value: string;
  emptyText: string;
  onTap: () => void;
  onValueChange: (value) => void;
};
```
