import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWindowsIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneWindowsIcon',
  component: StandaloneWindowsIcon,
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
} satisfies Meta<typeof StandaloneWindowsIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWindowsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
