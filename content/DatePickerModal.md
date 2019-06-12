---
path: "/content/DatePickerModal/"
date: "2019-07-01"
title: "DatePickerModal"
tags: ["components"]
---

🚧 👷‍♂️`Under Construction` 👷‍♀️🚧

```tsx
type Props = FrameProps & {
  id: string;
  open: boolean;
  range: boolean;
  date: string;
  start: string;
  end: string;
  onChangeDate: (date: Date) => void;
  onChangeRange: (start: Date, end: Date) => void;
  onSelectDate: (date: Date, end?: Date) => void;
};
```
