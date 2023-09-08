import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneZeroBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneZeroBoldIcon',
  component: StandaloneZeroBoldIcon,
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
} satisfies Meta<typeof StandaloneZeroBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneZeroBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
