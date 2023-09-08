import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleCalendarRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleCalendarRegularIcon',
  component: StandaloneCircleCalendarRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleCalendarRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleCalendarRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
