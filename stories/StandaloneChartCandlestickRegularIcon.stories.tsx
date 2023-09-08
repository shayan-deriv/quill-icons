import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartCandlestickRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneChartCandlestickRegularIcon',
  component: StandaloneChartCandlestickRegularIcon,
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
} satisfies Meta<typeof StandaloneChartCandlestickRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartCandlestickRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
