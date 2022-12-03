import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Table } from './index'

export default {
	title: 'Components/UI/Table',
	component: Table,
	argTypes: {},
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Primary = Template.bind({})
Primary.args = {
	title: 'Table',
	columns: ['Column1', 'Column2'],
	rows: [
		['tes', 'tes'],
		['tes', 'tes'],
	],
}
