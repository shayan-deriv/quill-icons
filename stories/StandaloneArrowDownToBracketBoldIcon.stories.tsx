import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownToBracketBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownToBracketBoldIcon',
  component: StandaloneArrowDownToBracketBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowDownToBracketBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownToBracketBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
