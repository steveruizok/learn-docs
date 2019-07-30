---
path: '/content/Inputs/'
date: '2019-07-01'
title: 'Inputs'
tags: ['components']
---

## Value

Each of the input components in the Learn package accept a `value` prop. We can use this prop to set the initial value of the input, or to sync its value with another part of our project’s state.

```tsx
// Overrides
import { Override } from "framer"

export function TextInput: Override {
  return {
    value: "Dear diary..."
  }
}
```

Different input components have values of different types. For example, the `Switch`, `Checkbox` and `Radio` inputs each accept a `boolean` (true or false) for their value, while `Slider` accepts a `number`.

```tsx
// Overrides
import { Override, Data } from "framer"

const state = Data({
  checked: false
})

export function Checkbox: Override {
  return {
    value: state.checked,
    onValueChange: (value) => state.checked = value
  }
}
```

## OnValueChange

Each of the input components in the Learn package accept an `onValueChange` prop. We can use this prop to change other parts of our project’s state when the user inputs a new value. 

```tsx
onValueChange = (value, valid) => void
```

The `onValueChange` prop accepts a callback function that the input will call whenever its value changes. The input will call this function with two arguments: the input’s new `value` and whether that value is “valid” according the input's `validation` function. (We’ll learn more about the validation function a later section.)

```tsx
// Overrides
import { Override } from "framer"

export function TextInputOverride: Override {
  return {
    onValueChange: (value, valid) => {
      console.log(`The input's new value is: ${value}`)
    }
  }
}
```

The `onValueChange` prop works the same for each input in the Learn package. 

## Disabled

All inputs in Learn can be disabled by setting the `disabled` prop to true. While disabled, the input will not respond to any user interactions. However, the input’s value can still be changed by sending the input a new `value` prop.

```tsx
// Overrides
import { Override, Data } from "framer"

const state = Data({
  disableSwitch: true
})

export function SwitchOverride: Override {
  return {
    disabled: state.disableSwitch
  }
}
```

## Validation

Each of the input components in the Learn package accept a `validation` prop. We can use this prop to determine whether or not the input’s value is “valid”. This is especially useful for text inputs, where we may for example want to know whether the entered text is an e-mail address, full name, or a strong enough password.

```tsx
validation = (value) => boolean
```

The `validation` prop accepts a callback function. The `validation` callback function is called with a single argument, the input’s current value, and returns a boolean:  `true` for “valid” or `false` for “invalid”. Whenever the input's value changes, the input will call this function with the current value of the input. It will include the returned boolean in its `onValueChange` event.

```tsx
// Overrides
import { Override } from "framer"

export function TextInputOverride: Override {
  return {
    validation: (value) => value.length > 3
    onValueChange: (value, valid) => {
      if (valid) {
        console.log(`The value ${value} is valid! :)`)
      } else {
        console.log(`The value ${value} is not valid. :(")
      }
    }
  }
}
```

The logical relationship between the input value and output boolean is entirely up to you. See below for some common examples.

The validation pattern works in the same way for each of the inputs in the Learn package, though the type of value passed into the validation function will differ depending on the input. 

| Component     | Validation Type                                |
| ------------- | ---------------------------------------------- |
| Checkbox      | `(value: boolean) => boolean`                  |
| CheckboxGroup | `(value: string[]) => boolean`                 |
| Switch        | `(value: boolean) => boolean`                  |
| Radio         | `(value: boolean) => boolean`                  |
| RadioGroup    | `(value: string) => boolean`                   |
| Segment       | `(value: string) => boolean`                   |
| TextInput     | `(value: string) => boolean`                   |
| Slider        | `(value: number, progress: number) => boolean` |

The default value for each input’s validation is `(value) => true`. This means that, unless given a custom validation prop, an input’s value will always be considered valid. 

### Common Validation Patterns

#### Number

Does the input have a value?

```tsx
(value: string) => value !== undefined
```

Is the value high enough?

```tsx
(value: number) => value > 5
```

Does the value match a given value?

```tsx
(value: number) => value === 5
```

Is the value between two numbers?

```tsx
(value: number) => value > 5 && value < 10
```

#### String

Does the input have a value?

```tsx
(value: string) => value.length > 0
```

Is the value long enough?

```tsx
(value: string) => value.length > 5
```

Is the value an email address?

```tsx
(value: string) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
```

Does the value include at least one number, one lowercase and one uppercase letter?

```tsx
(value: string) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value)
```

Is the value a URL?

```tsx
(value: string) => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/.test(value)

```

Is the value a UK postal code?

```tsx
(value: string) => /^([A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2})*$/.test(value)
```

Is the value a valid US postal code?

```tsx
(value: string) => /^[0-9]{5}(?:-[0-9]{4})?$/.test(value)
```

#### Array of Strings (CheckboxGroup)

Does the input have any checked values?

```tsx
(value: string[]) => value.length > 0
```

Does the value include a certain value?

```tsx
(value: string[]) => value.includes("Red")
```

Are there enough selected values?

```tsx
(value: string[]) => value.length > 2
```

## Controlled Inputs

A common pattern when using inputs is to “control” the input by “lifting" its state to an external state: usually a Data object for overrides or a setState hook for code components.

```tsx
// Overrides
import { Override, Data } from "framer"

const state = Data({
  checked: false
})

export function Checkbox: Override {
  return {
    value: state.checked,
    onValueChange: (value) => state.checked = value
  }
}
```

In the example above, we can say that the `Checkbox` is “controlled” because its value is both passed “up" to the state through its `onValueChange` event and received “down” from the state through the `value` prop.

We could use that state to drive other controlled inputs.

```tsx
// Overrides
import { Override, Data } from "framer"

const state = Data({
  checked: false
})

export function Checkbox: Override {
  return {
    value: state.checked,
    onValueChange: (value) => state.checked = value
  }
}

export function OtherCheckbox: Override {
  return {
    value: state.checked
  }
}
```

These relationships can become quite complex and may even include other properties, such as `validation`.

```tsx
// Overrides
import { Override, Data } from "framer"

const state = Data({
  isNameRequired: false
})

export function NameRequiredSwitch: Override {
  return {
    value: state.isNameRequired,
    onValueChange: (value) => state.isNameRequired = value
  }
}

export function NameInput: Override {
  return {
    validation: (value) => isNameRequired ? value.length > 0 : true
  }
}
```

