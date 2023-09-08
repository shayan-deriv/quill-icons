import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowDownRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowDownRegularIcon',
  component: LabelPairedCircleArrowDownRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowDownRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowDownRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
