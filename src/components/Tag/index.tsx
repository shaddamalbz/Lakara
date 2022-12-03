import { FC } from 'react'

export interface TagProps {
	label: string
	type: 'indigo' | 'red' | 'green'
}

export const Tag: FC<TagProps> = ({ label, type }) => {
	const className: string[] = []

	if (type === 'indigo') {
		className.push('bg-indigo-100 text-indigo-500')
	} else if (type === 'red') {
		className.push('bg-red-100 text-red-500')
	} else if (type === 'green') {
		className.push('bg-green-100 text-green-500')
	} else {
		className.push('bg-indigo-100 text-indigo-500')
	}

	return <span className={`px-4 py-1.5 rounded-full ${className.join(' ')}`}>{label}</span>
}
