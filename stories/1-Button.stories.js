import React from "react";

import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: "Button"
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

emoji.story = {
  name: "with emoji"
};



/*

import { Avatar } from './../src/react-string-avatar/index';

export const myAvatar = () => (
  <Avatar string="AS"></Avatar>
);

myAvatar.story = {
    name: 'with myAvatar'
};

*/

