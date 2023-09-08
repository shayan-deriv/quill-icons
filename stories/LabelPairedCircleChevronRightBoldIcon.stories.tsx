import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronRightBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronRightBoldIcon',
  component: LabelPairedCircleChevronRightBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronRightBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronRightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
