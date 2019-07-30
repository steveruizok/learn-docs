---
path: "/content/Text/"
date: "2019-07-01"
title: "Text"
tags: ["components"]
---

🚧 👷‍♂️`Under Construction` 👷‍♀️🚧

```tsx
type Props = Partial<FrameProps> & {
  text: string | number;
  type: string;
  color: string;
  textAlign: string;
  verticalAlign: string;
  padding: number;
  paddingTop: number;
  paddingLeft: number;
  paddingRight: number;
  paddingBottom: number;
  paddingPerSide: boolean;
  interactive: boolean;
  style: { [key: string]: any };
  resize: "width" | "height" | boolean;
  onResize: (width?: number, height?: number) => void;
};
```
