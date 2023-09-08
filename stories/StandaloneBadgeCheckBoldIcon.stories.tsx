import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBadgeCheckBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBadgeCheckBoldIcon',
  component: StandaloneBadgeCheckBoldIcon,
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
} satisfies Meta<typeof StandaloneBadgeCheckBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBadgeCheckBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
