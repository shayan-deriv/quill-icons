import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareRegularIcon',
  component: LabelPairedArrowUpRightFromSquareRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
