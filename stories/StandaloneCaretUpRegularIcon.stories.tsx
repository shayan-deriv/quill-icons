import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCaretUpRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCaretUpRegularIcon',
  component: StandaloneCaretUpRegularIcon,
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
} satisfies Meta<typeof StandaloneCaretUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCaretUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
