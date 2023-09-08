import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBarsBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBarsBoldIcon',
  component: LabelPairedBarsBoldIcon,
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
} satisfies Meta<typeof LabelPairedBarsBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBarsBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
