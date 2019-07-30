---
path: "/content/Colors/"
date: "2019-07-01"
title: "Colors"
tags: ["components"]
---

The Learn Design System package includes a set of Shared Colors.

| Color       | Code                        |
| :---------- | :-------------------------- |
| `Primary`   | `rgba(0, 86, 254, 1)`       |
| `Secondary` | `rgba(3, 175, 232, 1)`      |
| `Accent`    | `rgba(255, 67, 102, 1)`     |
| `Warn`      | `rgba(255, 171, 87, 1)`     |
| `Light`     | `rgba(255, 255, 255, 1)`    |
| `Neutral`   | `rgba(217, 217, 237, 1)`    |
| `Dark`      | `rgba(59, 59, 104, 1)`      |
| `Darker`    | `rgba(19, 19, 22, 1)`       |
| `Border`    | `rgba(203, 203, 220, 1)`    |
| `Active`    | `rgba(23, 23, 39, 0.2)`     |
| `Shadow`    | `rgba(37, 37, 45, 0.09)`    |
| `Glow`      | `rgba(255, 255, 255, 0.68)` |

## Canvas

On the Framer X canvas, you can select from these colors in the color selector
under the Shared Colors dropdown.

## Code

In your component code or overrides, you can access the package's colors by
importing them as shown below.

```tsx
// Overrides
import { Override } from "framer"
import { colors } from '@framer/steveruizok.education/code/'

export function ColorExample: Override {
  return {
    background: colors.Primary,
    border: `1px solid ${colors.Border}`
  }
}
```
