---
path: '/content/Stepper/'
date: '2019-07-01'
title: 'Stepper'
tags: ['components']
---


🚧 👷‍♂️`Under Construction` 👷‍♀️🚧 

```tsx
type Props = Partial<FrameProps> & {
	value: number
	disabled: boolean
	min: number
	max: number
	step: number
	clamp: boolean // used only for property controls
	validation: (value: number) => boolean
	onValueChange: (value: number, valid: boolean) => any
}
```

​

