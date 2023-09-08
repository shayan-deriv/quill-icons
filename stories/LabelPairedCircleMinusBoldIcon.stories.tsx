import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleMinusBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleMinusBoldIcon',
  component: LabelPairedCircleMinusBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleMinusBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleMinusBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
