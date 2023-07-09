import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
};
export default meta;

type Story = StoryObj<typeof Page>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    ...HeaderStories.FirstStory.args,
  },
};


