import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneStarRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneStarRegularIcon',
  component: StandaloneStarRegularIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StandaloneStarRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneStarRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
