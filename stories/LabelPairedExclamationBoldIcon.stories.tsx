import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedExclamationBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedExclamationBoldIcon',
  component: LabelPairedExclamationBoldIcon,
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
} satisfies Meta<typeof LabelPairedExclamationBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedExclamationBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
