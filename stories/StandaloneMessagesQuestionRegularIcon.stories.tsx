import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMessagesQuestionRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMessagesQuestionRegularIcon',
  component: StandaloneMessagesQuestionRegularIcon,
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
} satisfies Meta<typeof StandaloneMessagesQuestionRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMessagesQuestionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
