import { IFilter, IFilters } from '@/lib/definitions'
import React from 'react';

export const Filters = ({ filters, onFilterChange }: { filters: IFilters, onFilterChange: any }) => {
	const handleInputChange = (e: any) => {
		const { name, value, checked } = e.target;
		const filter: IFilter = (filters as any)[name];
		const index = (filter as any).findIndex((item: IFilter) => item.value === value);
		(filter as any)[index].checked = checked;
		onFilterChange(filters);
	};
	return (
		<>
			<div className="divide-y divide-gray-200 dark:divide-gray-600">
				{Object.keys(filters).map((filter, y) => (
					<div className="px-4 py-4" key={`filter-i-${y}`}>
						<h3 className="mb-3 text-xl font-medium uppercase text-gray-800 dark:text-gray-300">{filter}</h3>
						<div className="space-y-2">
							{Object.keys((filters as any)[filter]).map((key, i) => {
								const item: IFilter = (filters as any)[filter][key];
								return (
									<React.Fragment key={`filter-${filter}-${key}-${i}`}>
										{item.type === 'select' || item.type === 'rating' ? (
											<div>
												<div className="flex items-center">
													<input
														onChange={handleInputChange}
														type="checkbox"
														name={filter}
														id={item.name}
														className="cursor-pointer rounded-sm text-primary focus:ring-0"
														value={item.value}
														checked={item.checked}
													/>
													<label htmlFor={item.name} className="ml-3 capitalize text-gray-600 dark:text-gray-300">
														{item.name}
													</label>

													{item.type === 'rating' && (
														<div className="ml-auto flex items-center space-x-1">
															{Array.from({ length: parseInt(item.value) }).map((_, rating) => (
																<svg
																	key={`rating-${rating}`}
																	className="h-4 w-4 text-yellow-300"
																	aria-hidden="true"
																	xmlns="http://www.w3.org/2000/svg"
																	fill="currentColor"
																	viewBox="0 0 22 20"
																	data-rate={rating}
																>
																	<path
																		d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
																	/>
																</svg>
															))}
														</div>
													)}
												</div>
											</div>
										) : item.type === 'size' ? (
											<div className="size-selector inline-block space-x-2">
												<input
													onChange={handleInputChange}
													type="checkbox"
													name="size"
													id={item.name}
													className="hidden"
													value={item.value}
												/>
												<label
													htmlFor={item.name}
													className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs capitalize text-gray-600 shadow-sm dark:text-gray-300 ${item.checked ? 'bg-teal-700 text-white' : ''}`}
												>
													{item.name}
												</label>
											</div>
										) : item.type === 'color' ? (
											<div className="inline-flex items-center space-x-2">
												<input
													onChange={handleInputChange}
													type="checkbox"
													name="color"
													id={item.name}
													className="hidden"
													value={item.value}
												/>
												<label
													htmlFor={item.name}
													className={`block h-6 w-6 cursor-pointer rounded-sm border border-gray-200 shadow-sm`}
													style={{ backgroundColor: item.value }}
												>
													{item.checked && (
														<svg
															className="ml-auto mr-auto h-full text-white"
															aria-hidden="true"
															xmlns="http://www.w3.org/2000/svg"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M10.707 13.293a1 1 0 0 1-1.414 0L5 9.414l1.414-1.414L9 10.586l4.293-4.293L15 7.414l-5.293 5.293z"
															/>
														</svg>
													)}
												</label>
											</div>
										) : null}
									</React.Fragment>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</>
	)
}


