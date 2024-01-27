import { TBreadcrumbs } from '@/lib/definitions'
import Link from 'next/link'

export const Breadcrumb = ({ breadcrumbs }: { breadcrumbs: TBreadcrumbs }) => {
	return (
		<>
			<div className="container">
				<div className="flex items-center overflow-x-auto whitespace-nowrap py-4 capitalize">
					<Link href="/" className="text-gray-600 dark:text-gray-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
							/>
						</svg>
					</Link>

					{breadcrumbs.map((breadcrumb, i) => (
						<div key={`breadcrumb-${i}`}>
							<span className="mx-5 text-gray-500 dark:text-gray-300"> / </span>
							<Link
								href={breadcrumb.url}
								className={breadcrumbs.length - i === 1
									? 'pointer-events-none text-blue-600 dark:text-blue-400'
									: 'text-gray-600 hover:underline dark:text-gray-200'}
							>
								{breadcrumb.name}
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

