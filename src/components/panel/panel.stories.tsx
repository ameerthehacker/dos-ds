import React from 'react';
import { Panel, PanelProps } from './panel';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Panel',
  component: Panel
};

const Template: Story<PanelProps> = (args) => <Panel {...args} />;
export const Default = Template.bind({});

Default.args = {
  heading: 'Welcome',
  children: 'You can put anything you want inside me!'
};
