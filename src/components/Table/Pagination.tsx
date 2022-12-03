import { FC } from 'react'

import { Button } from '../Button'

export interface PaginationProps {
	config: {
		activePage: number
		totalPage: number
	}
}

export const Pagination: FC<PaginationProps> = ({ config }) => {
	return (
		<div className="flex justify-between items-center gap-x-2 px-4 py-2">
			<Button secondary width="100px" size="small">
				Previous
			</Button>

			{config.totalPage >= 10
				? Array(10).map((_, idx: number) => (
						<div
							className={`rounded-full w-8 h-8 p-1 grid place-items-center cursor-pointer ${
								config.activePage === idx + 1
									? 'bg-indigo-500 text-white hover:bg-indigo-600'
									: 'bg-white text-gray-500 border'
							}`}
							key={idx}
						>
							{idx + 1}
						</div>
				  ))
				: Array(config.totalPage).map((_, idx: number) => (
						<div
							className={`rounded-full w-8 h-8 p-1 grid place-items-center cursor-pointer ${
								config?.activePage === idx + 1
									? 'bg-indigo-500 text-white hover:bg-indigo-600'
									: 'bg-white text-gray-500 border'
							}`}
							key={idx}
						>
							{idx + 1}
						</div>
				  ))}

			<Button secondary width="100px" size="small">
				Next
			</Button>
		</div>
	)
}
