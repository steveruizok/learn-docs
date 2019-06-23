---
path: "/content/TextInput/"
date: "2019-07-01"
title: "TextInput"
tags: ["components"]
---

A **TextInput** is an input where a user can enter text. It has several props
for customizing the input's interactivity and content.

| Prop                | Type                    | Notes                                                                                                                                             |
| :------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`value`**         | `string`                |                                                                                                                                                   |
| **`required`**      | `boolean`               | Whether he input must have a value in order to be valid.                                                                                          |
| **`disabled`**      | `boolean`               |                                                                                                                                                   |
| **`validation`**    | `function`              |                                                                                                                                                   |
| **`onValueChange`** | `function`              |                                                                                                                                                   |
| **`placeholder`**   | `string`                | Text to display when the input is empty.                                                                                                          |
| **`message`**       | `boolean` or `function` | A message to display below the input. See _Message_ below.                                                                                        |
| **`readOnly`**      | `boolean`               | Whether a user may change the input's value.                                                                                                      |
| **`password`**      | `boolean`               | Whether the input should bask its content with bullets.                                                                                           |
| **`clearable`**     | `boolean`               | Whether to display a button to clear the input's value.                                                                                           |
| **`delay`**         | `number`                | Number of seconds to wait after the user stops typing before firing onValueChange.                                                                |
| **`tabIndex`**      | `number`                | The input's place in the screen's [sequential keyboard navigation](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). |
| **`onBlur`**        | `function`              | Called when the user navigates away from the input.                                                                                               |
| **`onFocus`**       | `function`              | Called when the user navigates to the input.                                                                                                      |
| **`onInputStart`**  | `function`              | Called when the user begins entering text.                                                                                                        |

See the [Inputs](content/Inputs/) section for more on how inputs work in Learn.

## Message

An input's message may be either a string or a callback function that accepts
the input's value and validation state and returns a string.

```tsx
// Overrides

import { Override } from "framer";

// Message as a string
export function StringMessageExample(): Override {
  return {
    placeholder: "Enter your full name",
    validation: value => value.includes(" "),
    message: "Be sure to enter both your first and last name."
  };
}

// Message as a string
export function CallbackMessageExample(): Override {
  return {
    placeholder: "Enter your full name",
    validation: value => value.includes(" "),
    message: (value, valid) => {
      if (value.length === 0) {
        return "Your name should include both a first and last name.";
      }
      if (!valid) {
        return "Be sure to enter both your first and last name.";
      }
    }
  };
}
```

## Delay

Before running the `onChangeValue` event, the TextInput component will wait
until a certain amount of time has passed since the user's last change. This
prevents the event from firing while the user is still typing. By default, the
length of this time is .25 seconds, but you may adjust the length of this delay
through the `delay` prop.

```tsx
// Overrides

import { Override } from "framer";

export function InputWithDelay(): Override {
  return {
    delay: 1,
    onValueChange: value => console.log(value)
  };
}

export function NoDelayInput(): Override {
  return {
    delay: 0,
    onValueChange: value => console.log(value)
  };
}
```

## Examples

```tsx
// Overrides

import { Override } from "framer";

export function TextInputExample(): Override {
  return {
    value: "",
    required: false,
    disabled: false,
    validation: value => value.includes(" "),
    onValueChange: (value, valid) => console.log(value, valid),
    placeholder: "Enter your name",
    message: "Please enter your full name.",
    readOnly: false,
    password: false,
    delay: 0.25,
    tabIndex: 0,
    onFocus: () => console.log("Input focused!"),
    onBlur: () => console.log("Input blurred!"),
    onInputStart: () => console.log("Input started!")
  };
}
```

```tsx
// Code component

import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { TextInput } from "@framer/steveruizok.education/code";

export const TextInputExample = props => {
  const handleValueChange = (value, valid) => {
    console.log(value);
  };

  return (
    <Frame size="100%" background="none">
      <TextInput
        center
        value={""}
        required={false}
        disabled={false}
        validation={value => value.includes(" ")}
        onValueChange={(value, valid) => console.log(value, valid)}
        placeholder={"Enter your name."}
        message={"Place enter yoru full name."}
        readOnly={false}
        password={false}
        delay={0.25}
        tabIndex={0}
        onFocus={() => console.log("Input focused!")}
        onBlur={() => console.log("Input blurred!")}
        onInputStarte={() => console.log("Input started!")}
      />
    </Frame>
  );
};
```
