---
path: "/content/RowItem/"
date: "2019-07-01"
title: "RowItem"
tags: ["components"]
---

A **RowItem** displays text on the left side and an optional component on the
right side: another [Text](Text), a [Checkbox](Checkbox), [Radio](Radio),
[Switch](Switch) or [Icon](Icon).

| Prop                | Type       | Notes                                        |
| :------------------ | :--------- | :------------------------------------------- |
| **`text`**          | `string`   | The text to display on the left side.        |
| **`component`**     | `string`   | The component to display, if any.            |
| **`value`**         | `boolean`  | The value to pass to the component.          |
| **`icon`**          | `string`   | If component is `icon`, the icon to display. |
| **`validation`**    | `function` |                                              |
| **`disabled`**      | `boolean`  |                                              |
| **`validation`**    | `function` |                                              |
| **`onValueChange`** | `function` |                                              |
| **`paddingLeft`**   | `number`   | The left padding on the RowItem's text.      |

See the [Inputs](Inputs) section for more on how inputs work in Learn.

### Component

A RowItem's `component` prop can accept one of the following options:

| Component    |
| ------------ |
| `"text"`     |
| `"icon"`     |
| `“switch”`   |
| `“radio”`    |
| `“checkbox”` |
| `"stepper"`  |
