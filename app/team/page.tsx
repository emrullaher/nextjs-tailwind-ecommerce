import { Metadata } from "next"
import { TTeam } from "@/lib/definitions"
import Link from "next/link";

export const metadata: Metadata = {
	title: "Meet Team | Fake Store",
	description: "Meet the team behind Fake Store",
}

export default function Team() {

	const team: TTeam = [
		{
			name: 'Emma Doe',
			role: 'design director',
			image:
				'https://images.unsplash.com/photo-1521488741203-dcc320950ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
		},
		{
			name: 'Joseph Gonzalez',
			role: 'Lead Developer',
			image:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
		},
		{
			name: 'Olivia Wathan',
			role: 'Lead Designer',
			image:
				'https://images.unsplash.com/photo-1531369201-4f7be267b1de?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tYW58fHx8fHwxNzAwMzQxMjYw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
		},
		{
			name: 'William Taylor',
			role: 'Full Stack Developer',
			image:
				'https://images.unsplash.com/photo-1566753323558-f4e0952af115?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFufHx8fHx8MTcwMDM0MTMxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
		},
		{
			name: 'Liam Miller',
			role: 'Graphic Designer',
			image:
				'https://images.unsplash.com/photo-1611608822650-925c227ef4d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFufHx8fHx8MTcwMDM0MTM4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
		},
		{
			name: 'Noah Davis',
			role: 'Products Manager',
			image:
				'https://images.unsplash.com/photo-1572708609354-e4b4bdfe5a93?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFufHx8fHx8MTcwMDM0MTQxOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
		},
		{
			name: 'Sophia Smith',
			role: 'Software Engineer',
			image:
				'https://images.unsplash.com/photo-1577253313708-cab167d2c474?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tYW58fHx8fHwxNzAwMzQxNDk4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
		},
		{
			name: 'Mason Taylor',
			role: 'Content Writer',
			image:
				'https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFufHx8fHx8MTcwMDM0MTU1Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
		}
	];
	return (
		<>
			<hr />
			<div className=" mb-20 mt-10">
				<section>
					<div className="container mx-auto px-6 py-10">
						<h1
							className="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl"
						>
							Our Executive Team
						</h1>

						<p className="mx-auto my-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
							At our core, we believe in the power of collaboration, innovation, and leadership. Meet the
							incredible individuals driving our company's success.
						</p>

						<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
							{team.map((person) => (
								<div
									key={person.name}
									className="group flex transform cursor-pointer flex-col items-center rounded-xl border p-8 transition-colors duration-300 hover:border-transparent hover:bg-teal-700 dark:border-gray-700 dark:hover:border-transparent"
								>
									<img
										className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
										src={person.image}
										alt=""
									/>

									<h1
										className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white"
									>
										{person.name}
									</h1>

									<p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
										{person.role}
									</p>

									<div className="-mx-2 mt-3 flex">
										<Link
											href="https://github.com/emrullaher"
											className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
											aria-label="Github"
										>
											<svg
												className="h-6 w-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
												>
												</path>
											</svg>
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	)
}


