---
path: '/content/TextInput/'
date: '2019-07-01'
title: 'TextInput'
tags: ['components']
---


🚧 👷‍♂️`Under Construction` 👷‍♀️🚧 

```tsx
type Props = Partial<FrameProps> & {
    value: string
    disabled: boolean
    onValueChange: (value: string, valid: boolean) => any
    validation: (value: string) => boolean
} & {
    placeholder: string
    readOnly: boolean
    password: boolean
    message: string
    delay: number
    clearable: boolean
    onBlur: (value: string, valid: boolean) => any
    onFocus: (value: string, valid: boolean) => any
    onInputStart: () => any
}
```

