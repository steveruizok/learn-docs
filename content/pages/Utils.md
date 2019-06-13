---
path: "/content/Utils/"
date: "2019-07-01"
title: "Utils"
tags: ["components"]
---

The Learn Design System ships with several utility functions for handling common
programming tasks. Like the package's components, these can be imported from
`'@framer/steveruizok.education/code/'`.

---

# Array

## range

```tsx
function range(
  length: number // The length of the array
): number[];
```

Get a range of numbers of a given length, starting from zero and incrementing
by 1.

```tsx
import { range } from "@framer/steveruizok.education/code/";

const valueA = range(1); // [0]
const valueB = range(3); // [0, 1, 2]
const valueC = range(5); // [0, 1, 2, 3, 4]
```

## rangeFrom

```tsx
function rangeFrom(
  start: number, // The first number in the array.
  end: number, // The last number in the array.
  step?: number // The difference between each number. Default is `1`.
): number[];
```

Get a range of numbers that start from a given number and end at a given number.
You may pass a third argument, `step`, that determines the difference between
each number in the array.

```tsx
import { rangeFrom } from "@framer/steveruizok.education/code/";

const valueA = rangeFrom(0, 3); // [0, 1, 2, 3]
const valueB = rangeFrom(0, 6, 3); // [0, 3, 6]
const valueC = rangeFrom(0, 1, 0.5); // [0, .5, 1]
```

## chunk

```tsx
function chunk(
  array: any[], // The array to chunk.
  length: number // The maximum length of each chunk.
): any[][];
```

Get sub-arrays of a given length from an array.

```tsx
import { chunk } from "@framer/steveruizok.education/code/";

const valueA = chunk([0, 1, 2, 3], 2); // [[0, 1], [2, 3]]
const valueB = chunk([0, 1, 2, 3], 3); // [[0, 1, 2], [3]]
const valueC = chunk([0, 1, 2, 3], 4); // [[0, 1, 2, 3]]
```

## pull

```tsx
function pull(
  array: any[], // The array to change.
  ...values: any[] // One or more values to remove.
): any[];
```

Remove the given values from an array.

```tsx
import { pull } from "@framer/steveruizok.education/code/";

const valueA = pull(["a", "b", "c"], "a"); // ["b", "c"]
const valueB = pull(["a", "b", "c"], "a", "b"); // ["c"]
const valueC = pull(["a", "b", "c"], "a", "b", "c"); // []
```

## pullAtIndex

```tsx
function pullAtIndex(
  array: any[], // The array to change.
  ...indexes: any[] // One or more indexes to remove.
): any[];
```

Remove the given values from an array.

```tsx
import { pullAtIndex } from "@framer/steveruizok.education/code/";

const valueA = pullAtIndex(["a", "b", "c"], 0); // ["b", "c"]
const valueB = pullAtIndex(["a", "b", "c"], 0, 1); // ["c"]
const valueC = pullAtIndex(["a", "b", "c"], 0, 1, 3); // []
```

---

# Numbers

## clamp

```tsx
function clamp(
  value: number, // The number to clamp.
  min: number, // The lowest possible result.
  max: number // The highest possible result.
): number;
```

Clamp a number between a minimum and a maxiumum.

```tsx
import { clamp } from "@framer/steveruizok.education/code/";

const valueA = clamp(6, 0, 10); // 6
const valueB = clamp(-2, 0, 10); // 0
const valueC = clamp(12, 0, 10); // 10
```

## normalize

```tsx
function normalize(
  value: number, // The number to normalize.
  min: number, // The lowest possible result.
  max: number, // The highest possible result.
  clamp?: boolean // Whether to clamp the result between 0 and 1.
): number;
```

Get a number that represents the distance of a value between a minimum and
maximum.

```tsx
import { normalize } from "@framer/steveruizok.education/code/";

const valueA = normalize(3, 0, 5); // .6
const valueB = normalize(5, 0, 5); // 1
const valueC = normalize(-1, 0, 5); // 0
const valueD = normalize(-1, 0, 5, false); // -0.2
```

---

# Timing

## sleep

```tsx
function sleep(
  duration: number // How many seconds to wait.
): Promise<unknown>;
```

Sleep for a duration. This utility only works in an async function.

```tsx
import { sleep } from "@framer/steveruizok.education/code/";

async function Example() {
  console.log("First message");
  await sleep(1.5);
  console.log("Second message");
  await sleep(2);
  console.log("Third message");
}
```

---

# Values

## isEqual

```tsx
function isEqual(
  valueA: any, // The first value to compare.
  valueB: any // The second value to compare.
): boolean;
```

Whether two values (of any type) are exactly equal.

```tsx
import { isEqual } from "@framer/steveruizok.education/code/";

const valueA = isEqual([1, 2, 3], [1, 2, 3]); // true
const valueB = isEqual([1, 2, 3], ["a", "b", "c"]); // false
const valueC = isEqual({ name: "Kristina" }, { name: "Sarah" }); // false
```

## isEmail

```tsx
function isEmail(
  text: string // The text to check.
): boolean;
```

Get whether or not a given text string is a valid e-mail.

```tsx
import { isEmail } from '@framer/steveruizok.education/code/'

const valueA = isEmail(steve@aol.com) // true
const valueB = isEmail(steveaol.com) // false
const valueC = isEmail(steve@aol) // false
```
