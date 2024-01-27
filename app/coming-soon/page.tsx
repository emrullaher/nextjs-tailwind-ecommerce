import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Coming Soon | Fake Store",
	description: "This page is not available right now, but it will be soon. Stay tuned!",
}

export default function ComingSoon() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container mx-auto flex min-h-[600px] items-center px-6 py-12">
				<div className="mx-auto flex max-w-sm flex-col items-center text-center">
					<p className="rounded-full bg-blue-50 p-3 text-sm font-medium text-blue-500 dark:bg-gray-800">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598"
							/>
						</svg>
					</p>
					<h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
						Coming Soon!
					</h1>
					<p className="mt-4 text-gray-500 dark:text-gray-400">
						This page is not available right now, but it will be soon. Stay tuned!
					</p>

					<div className="mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
						<Link
							href="/"
							className="w-1/2 shrink-0 rounded-lg bg-blue-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto"
						>
							Take me home
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}



