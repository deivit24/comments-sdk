import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Example/Buttons"
};

export default meta;

type Story = StoryObj<typeof Header>;
export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    user: {},
  },
};
