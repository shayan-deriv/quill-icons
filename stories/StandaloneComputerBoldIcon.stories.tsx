import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneComputerBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneComputerBoldIcon',
  component: StandaloneComputerBoldIcon,
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
} satisfies Meta<typeof StandaloneComputerBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneComputerBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
