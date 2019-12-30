import React from "react";

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from "@storybook/react/demo";

//import Button from './button';

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

storiesOf('Button', module)
  .add('Action', () => (<Button onClick={action('button-click')}>Hello World!</Button>)
);

/*
emoji.story = {
  name: "with emoji"
};

storiesOf('Button', module).add('default view', () => (
  <Button onClick={action('button-click')}>Hello World!</Button>
));
*/