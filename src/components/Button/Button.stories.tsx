import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './index'

export default {
	title: 'Components/UI/Button',
	component: Button,
	argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Button',
}
