import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// Функция обработчика, которую можно использовать в историях
const handleCheckedChange = (checked: boolean) => {
  console.log('Checkbox changed:', checked)
}

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Unchecked Checkbox',
    onCheckedChange: handleCheckedChange,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked Checkbox',
    onCheckedChange: handleCheckedChange,
  },
}
