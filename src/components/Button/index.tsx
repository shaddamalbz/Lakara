import { FC, ReactNode, useRef } from 'react'

export interface ButtonProps {
	children: ReactNode
	onClick?: () => void
	primary?: boolean
	secondary?: boolean
	size?: 'small' | 'large'
	width?: string
}

export const Button: FC<ButtonProps> = ({
	children,
	primary,
	secondary,
	size,
	width,
	...props
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null)
	const className = []

	if (primary) {
		className.push('text-white bg-indigo-500 hover:bg-indigo-600')
	} else if (secondary) {
		className.push('text-gray-500 bg-white border hover:border-1 hover:font-bold')
	} else {
		className.push('text-indigo-500 bg-indigo-100 hover:text-indigo-600')
	}

	if (size === 'small') {
		className.push('text-sm px-3 py-1')
	} else if (size === 'large') {
		className.push('text-sm px-6 py-2.5')
	} else {
		className.push('px-5 py-1.5')
	}

	if (width) {
		if (buttonRef.current !== null) {
			buttonRef.current.style.width = width
		}
	}

	return (
		<button
			className={`rounded-full flex items-center justify-center cursor-pointer ${className.join(
				' ',
			)}`}
			ref={buttonRef}
			{...props}
		>
			{children}
		</button>
	)
}
