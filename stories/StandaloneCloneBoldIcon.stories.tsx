import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCloneBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCloneBoldIcon',
  component: StandaloneCloneBoldIcon,
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
} satisfies Meta<typeof StandaloneCloneBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCloneBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
