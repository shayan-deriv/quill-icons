import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleUserRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleUserRegularIcon',
  component: StandaloneCircleUserRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleUserRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleUserRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
