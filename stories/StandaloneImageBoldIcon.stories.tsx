import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneImageBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneImageBoldIcon',
  component: StandaloneImageBoldIcon,
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
} satisfies Meta<typeof StandaloneImageBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneImageBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
