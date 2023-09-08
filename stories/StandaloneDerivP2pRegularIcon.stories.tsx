import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneDerivP2pRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneDerivP2pRegularIcon',
  component: StandaloneDerivP2pRegularIcon,
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
} satisfies Meta<typeof StandaloneDerivP2pRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneDerivP2pRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
