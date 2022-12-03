import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Pagination } from './Pagination'

export default {
	title: 'Components/UI/Pagination',
	component: Pagination,
	argTypes: {},
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />

export const Primary = Template.bind({})
Primary.args = {
	config: {
		activePage: 2,
		totalPage: 10,
	},
}
