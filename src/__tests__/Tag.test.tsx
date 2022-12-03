import { render } from '@testing-library/react'

import { Tag } from '../components/Tag'

describe('<Tag />', () => {
	test('Should render <span> tag', () => {
		const { container } = render(<Tag label="Label" type="indigo" />)
		expect(container.querySelector('span')).toBeInTheDocument()
	})

	test('Should have text content', () => {
		const { container } = render(<Tag label="Label" type="indigo" />)
		expect(container).toHaveTextContent('Label')
	})

	describe('Should render color correctly', () => {
		test('Should render indigo color', () => {
			const { container } = render(<Tag label="Label" type="indigo" data-testid="tag" />)
			expect(container.firstChild).toHaveClass('bg-indigo-100 text-indigo-500')
		})

		test('Should render green color', () => {
			const { container } = render(<Tag label="Label" type="green" />)
			expect(container.firstChild).toHaveClass('bg-green-100 text-green-500')
		})

		test('Should render red color', () => {
			const { container } = render(<Tag label="Label" type="red" />)
			expect(container.firstChild).toHaveClass('bg-red-100 text-red-500')
		})
	})
})
