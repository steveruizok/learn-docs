---
path: "/content/AlertModal/"
date: "2019-07-01"
title: "AlertModal"
tags: ["components"]
---

An **AlertModal** displays an alert message in a full-screen modal.

| Prop            | Type       | Notes                                                          |
| :-------------- | :--------- | :------------------------------------------------------------- |
| **`open`**      | `boolean`  | Whether the modal should be open (`true`) or closed (`false`). |
| **`title`**     | `string`   | The alert's title text.                                        |
| **`body`**      | `string`   | The alert's body text.                                         |
| **`warn`**      | `boolean`  | Whether to show the confirm button with the warn color.        |
| **`cancel`**    | `string`   | The text shown on the cancel button.                           |
| **`confirm`**   | `string`   | The text shown on the confirm button.                          |
| **`onCancel`**  | `function` | A callback to call when the user taps the cancel button.       |
| **`onConfirm`** | `function` | A callback to call when the user taps the confirm button.      |

## Examples

#### Overrides

```tsx
// App.tsx

import { Data, Override } from 'framer'

// State

const appState = Data({
  showModal: false,
  loggedIn: true
})

// Event handlers

const showLogoutModal = () => {
  setState({
    ...state,
    showModal: true,
  })
}

const logOut = () => {
  setState({
    ...state,
    loggedIn: false
  })
}

// Overrides

export function LogoutButton(): Override {
	return {
    text: "Log Out",
    onTap: showLogoutModal,
    disabled: !appState.loggedIn
	}
}

export function AlertModalExample(): Override {
	return {
    open: false,
    title: "Log Out"
    body: "Are you sure you wish to log out?"
    warn: true,
    confirm: "Log Out",
    cancel: "Cancel",
    onConfirm: () => null,
    onCancel: () => null,
	}
}
```

#### Code Component

```tsx
// LogOutScreen.tsx

import * as React from "react";
import { Frame } from "framer";
// @ts-ignore
import { AlertModal, Button } from "@framer/steveruizok.education/code";

export const AlertModalExample = props => {
  // State

  const [state, setState] = React.useState({
    showModal: false,
    loggedIn: true
  });

  // Event Handlers

  const handleLogOut = () => {
    setState({
      ...state,
      showModal: true
    });
  };

  const logOut = () => {
    setState({
      ...state,
      loggedIn: false
    });
  };

  // Presentation

  return (
    <Frame {...props} background="none">
      <Button
        center
        text="Log Out"
        onTap={handleLogOut}
        disabled={!appState.loggedIn}
      />
      {state.showModal && (
        <AlertModal
          center
          open={state.showModal}
          title={"Log Out"}
          body={"Are you sure you wish to log out?"}
          warn={true}
          confirm={"Log Out"}
          cancel={"Cancel"}
          onConfirm={logOut}
        />
      )}
    </Frame>
  );
};
```
