import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCirclePlusRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCirclePlusRegularIcon',
  component: StandaloneCirclePlusRegularIcon,
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
} satisfies Meta<typeof StandaloneCirclePlusRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCirclePlusRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
