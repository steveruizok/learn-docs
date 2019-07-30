---
path: "/content/Card/"
date: "2019-07-01"
title: "Card"
tags: ["components"]
---

A card is a structured container for content. It has several parts: a header,
footer, title, body, and image. The card will calculate certain sizes and
posititions depending on the content provided.

| Prop                   | Type       | Notes                                                    |
| :--------------------- | :--------- | :------------------------------------------------------- |
| **`title`**            | `string`   | The card's title text.                                   |
| **`body`**             | `string`   | The card's body text.                                    |
| **`header`**           | `string`   | The card's header text.                                  |
| **`footer`**           | `string`   | The card's footer text.                                  |
| **`body`**             | `string`   | The card's body text.                                    |
| **`autosize`**         | `boolean`  | Whether to resize the body container to fit its content. |
| **`image`**            | `string`   | An image URL.                                            |
| **`overlay`**          | `boolean`  | Whether to show an overlay on the card's image.          |
| **`color`**            | `string`   | The color for the image overlay.                         |
| **`favorite`**         | `boolean`  | Whether to display the favorite button.                  |
| **`isFavorite`**       | `boolean`  | Whether the card should be favorited.                    |
| **`onFavoriteChange`** | `function` | A callback to call when the user toggles the favorite.   |

## Examples

#### Overrides

```tsx
// App.tsx

import { Override } from "framer";

// Event Handlers

const handleFavoriteChange = isFavorite => {
  console.log("Card is favorite: " + isFavorite);
};

// Overrides

export function CardExampleA(): Override {
  return {
    title: "Card A"
  };
}

export function CardExampleB(): Override {
  return {
    title: "Card B",
    body: "This is the list's second card"
  };
}

export function CardExampleC(): Override {
  return {
    header: "Card C",
    image: "http://imgur.com/exampleImage",
    favorite: true,
    isFavorite: true,
    onFavoriteChange: handleFavoriteChange
  };
}

export function CardExampleD(): Override {
  return {
    header: "Card D",
    favorite: true,
    isFavorite: true,
    onFavoriteChange: handleFavoriteChange,
    image: "http://imgur.com/exampleImage",
    footer: "This card has a footer."
  };
}
```
