import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFourRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFourRegularIcon',
  component: LabelPairedFourRegularIcon,
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
} satisfies Meta<typeof LabelPairedFourRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFourRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
