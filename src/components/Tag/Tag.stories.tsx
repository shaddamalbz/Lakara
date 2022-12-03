import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Tag } from './index'

export default {
	title: 'Components/UI/Tag',
	component: Tag,
	argTypes: {},
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: 'Processing',
	type: 'indigo',
}
