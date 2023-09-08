import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleSortUpRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleSortUpRegularIcon',
  component: StandaloneCircleSortUpRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleSortUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleSortUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
