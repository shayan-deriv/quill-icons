import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronRightBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronRightBoldIcon',
  component: StandaloneChevronRightBoldIcon,
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
} satisfies Meta<typeof StandaloneChevronRightBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronRightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
