import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWifiBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWifiBoldIcon',
  component: LabelPairedWifiBoldIcon,
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
} satisfies Meta<typeof LabelPairedWifiBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWifiBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
