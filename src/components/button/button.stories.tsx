import React from 'react';
import { Button, ButtonProps } from './button';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['click .btn']
    }
  }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  bg: 'green',
  label: 'Ok',
  size: 'md'
};
