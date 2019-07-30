---
path: "/content/ProgressBar/"
date: "2019-07-01"
title: "ProgressBar"
tags: ["components"]
---

A ProgressBar displays a normalized value between 0 and 1. It may animate up to
full or down to empty.

| Prop                      | Type       | Notes                                                                |
| :------------------------ | :--------- | :------------------------------------------------------------------- |
| **`value`**               | `number`   | A number between zero and one.                                       |
| **`animate`**             | `boolean`  | When true, the ProgresrsBar will animate to full.                    |
| **`countdown`**           | `boolean`  | When true, the ProgressBar will animate to zero. Requires `animate`. |
| **`duration`**            | `number`   | The animation's duration in seconds.                                 |
| **`onAnimationComplete`** | `function` | Fired when the ProgressBar finishes its animation.                   |

## Examples

```tsx
// Overrides

import { Override } from 'framer'

export function ProgressBarExample(): Override {
	return {
    value: 0
    animate: true,
    countdown: false,
    onAnimationComplete: () => console.log("Complete!")
	}
}
```

```tsx
// Code component

import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { ProgressBar } from "@framer/steveruizok.education/code";

export const ProgressBarExample = props => {
  const handleAnimationComplete = () => {
    console.log("Complete!");
  };

  return (
    <Frame size="100%" background="none">
      <ProgressBar
        center
        value={0}
        animate
        countdown={false}
        onAnimationComplete={handleAnimationComplete}
      />
    </Frame>
  );
};
```
