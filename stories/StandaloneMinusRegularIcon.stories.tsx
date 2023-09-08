import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMinusRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMinusRegularIcon',
  component: StandaloneMinusRegularIcon,
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
} satisfies Meta<typeof StandaloneMinusRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMinusRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
