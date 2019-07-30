[![Build Status](https://travis-ci.org/jonathan-meyer/emoji.svg?branch=master)](https://travis-ci.org/jonathan-meyer/emoji)

# &lt;Emoji/&gt;

React component to insert emojis as images into your app.

## Install

```
npm add @stej/emoji
```

## Usage

```js
import React from "react";
import Emoji from "@stej/emoji";

class MyComponent extends React.Component {
  render() {
    return <Emoji>:bearded_person_tone2: Jonathan Meyer</Emoji>;
  }
}

export default MyComponent;
```

![screeshot](./Emoji.png)
