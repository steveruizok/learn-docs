---
path: "/content/TabBar/"
date: "2019-07-01"
title: "TabBar"
tags: ["components"]
---

A **TabBar** models the bottom tab bar of an iOS app. Each of the bar's tabs is
represented by an icon and an optional title.

| Prop              | Type                                           | Notes            |
| :---------------- | :--------------------------------------------- | :--------------- |
| **`tabs`**        | `Tab[]`                                        | See _Tab_ below. |
| **`currentTab`**  | `string` \| The current tab's `text` or index. |
| **`onChangeTab`** | `function`                                     |                  |
| **`showTitles`**  | `boolean`                                      |                  |

### Tab

The `tabs` prop accepts an array of tabs. A tab may be either an
[icon name](content/IconNames/) or an object with both an `icon` property (an
icon name) and a `text` property (the label). If you're not planning to show
titles, an array of icon names will be enough; however, if you are planning to
show titles, you'll likely want to use the object format. If not, then the
component will display the icon's name as its title.

```tsx
const tabExampleA = "accessible";

const tabExampleB = {
  icon: "accessible",
  title: "Murderball"
};
```

## Examples

```tsx
// Override

import { Override } from "framer"

export function TabBarExampleA(): Override {
	return {
		tabs: ["home", "person", "settings"],
    currentTab={1},
		onChangeTab: (index, tab) => {
			console.log("Tab changed!", index, tab)
		},
	}
}

export function TabBarExampleB(): Override {
	return {
		tabs: [
			{
				icon: "home",
				title: "Places",
			},
			{
				icon: "person",
				title: "People",
			},
			{
				icon: "settings",
				title: "Things",
			},
		],
    currentTab={1},
		onChangeTab: (index, tab) => {
			console.log("Tab changed!", index, tab)
		},
    showTitles={true}
	}
}
```

```tsx
// Code Component

import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { TabBar } from "@framer/steveruizok.education/code/";

export const TabBarExample = props => {
  const handleTabChange = (index, tab) => {
    console.log("Tab changed!", index, tab);
  };

  return (
    <Frame size="100%" background="none">
      <TabBar
        tabs={[
          {
            icon: "home",
            title: "Places"
          },
          {
            icon: "user",
            title: "People"
          },
          {
            icon: "settings",
            title: "Things"
          }
        ]}
        currentTab={1}
        showTitles
        onChangeTab={() => handleTabChange}
      />
    </Frame>
  );
};
```
