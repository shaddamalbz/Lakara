import { FC } from 'react'

import { Pagination } from './Pagination'

export interface TableProps {
	title: string
	columns: string[]
	rows: string[][]
}

export const Table: FC<TableProps> = ({ columns, rows, title }) => {
	const paginationConfig = {
		activePage: 2,
		totalPage: 5,
	}

	return (
		<div className="shadow bg-white border border-gray-50 rounded">
			<h3 className="px-4 py-2 font-bold text-xl">{title}</h3>
			<table className="w-full table-fixed border-y">
				<thead className="text-gray-500 border-b">
					<tr>
						{columns?.map((h: string, idx: number) => (
							<th className="px-4 py-2" key={idx}>
								{h}
							</th>
						))}
						<th className="px-4 py-2">Action</th>
					</tr>
				</thead>
				<tbody className="font-semibold">
					{rows?.map((row: any[], idx: number) => (
						<tr key={idx}>
							{row.map((item: string, idx: number) => (
								<td className="px-4 py-1" key={idx}>
									{item || '-'}
								</td>
							))}
							<td className="px-4 py-2">aksi</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination config={paginationConfig} />
		</div>
	)
}
