import { FC, ReactNode } from 'react'

export interface ButtonProps {
	children: ReactNode
	onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button className="px-4 py-1 text-white bg-blue-400 rounded" {...props}>
			{children}
		</button>
	)
}
