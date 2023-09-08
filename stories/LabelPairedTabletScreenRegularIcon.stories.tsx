import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTabletScreenRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTabletScreenRegularIcon',
  component: LabelPairedTabletScreenRegularIcon,
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
} satisfies Meta<typeof LabelPairedTabletScreenRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTabletScreenRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
