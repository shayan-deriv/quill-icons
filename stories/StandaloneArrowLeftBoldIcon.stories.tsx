import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowLeftBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowLeftBoldIcon',
  component: StandaloneArrowLeftBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowLeftBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowLeftBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
