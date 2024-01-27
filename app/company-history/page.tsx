import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Our Company History | Fake Store",
	description:
		"Learn about the history of Fake Store, from our humble beginnings to our current status as a global leader in the industry.",
}

export default function CompanyHistory() {
	return (
		<>
			<hr />
			<div className="container mb-20 mt-10">
				<h1 className="mb-5 text-4xl font-bold text-gray-900 dark:text-gray-300">Our Company History</h1>
				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Inception</h2>
					<p className="text-gray-500 dark:text-gray-400">
						Welcome to the journey of Fake Store – a tale of passion, innovation, and unwavering
						commitment. Founded in {new Date().getFullYear()}, our story began with a simple yet powerful
						vision: to provide people with high-quality, affordable products that enhance their lives.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Early Strides</h2>
					<p className="text-gray-500 dark:text-gray-400">
						In the early years, Fake Store navigated the dynamic landscape of online retail with
						determination and a thirst for excellence. Our dedicated team worked tirelessly to establish a
						solid foundation, laying the groundwork for what would become a transformative force in the
						e-commerce industry.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
						Milestones and Achievements
					</h2>

					<div className="mb-4">
						<h3 className="text-xl font-bold text-gray-800 dark:text-gray-300">
							{new Date().getFullYear()}: A Landmark Achievement
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							In {new Date().getFullYear()}, Fake Store achieved a significant milestone by launching the
							innovative SmartShop, a product that redefined the online shopping experience. This marked a
							pivotal moment in our journey toward excellence.
						</p>
					</div>

					<div className="mb-4">
						<h3 className="text-xl font-bold text-gray-800 dark:text-gray-300">
							{new Date().getFullYear() - 1}: Expanding Horizons
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Building on our success, Fake Store expanded its reach beyond borders, venturing into new
							markets and establishing a global presence in the competitive e-commerce landscape. This
							expansion solidified our position as a leader in the online retail industry.
						</p>
					</div>

					<div className="mb-4">
						<h3 className="text-xl font-bold text-gray-800 dark:text-gray-300">
							{new Date().getFullYear() - 2}: Innovation at Its Core
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							In {new Date().getFullYear() - 2}, Fake Store pioneered the integration of artificial
							intelligence in our online platform, revolutionizing the way customers discover and purchase
							products. This commitment to innovation has been at the core of our success.
						</p>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Weathering Challenges</h2>
					<p className="text-gray-500 dark:text-gray-400">
						The path to success is rarely without obstacles. Fake Store faced its share of challenges,
						demonstrating resilience and adaptability. Through strategic decision-making and a commitment
						to continuous improvement, we emerged stronger and more resilient.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
						Commitment to Sustainability
					</h2>
					<p className="text-gray-500 dark:text-gray-400">
						As stewards of the environment, Fake Store takes pride in our commitment to sustainability.
						From implementing eco-friendly practices in production to actively participating in community
						recycling initiatives, we strive to make a positive impact on the planet.
					</p>
				</section>

				<section>
					<h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Looking Forward</h2>
					<p className="text-gray-500 dark:text-gray-400">
						Today, Fake Store stands as a beacon of e-commerce excellence. With a legacy built on
						innovation, integrity, and a customer-centric approach, we continue to push boundaries and
						shape the future of online retail.
					</p>
					<p className="text-gray-500 dark:text-gray-400">
						Join us on the next chapter of our journey as we remain dedicated to providing a seamless and
						delightful online shopping experience. The story of Fake Store is still unfolding, and we
						invite you to be a part of the exciting chapters that lie ahead.
					</p>
					<p className="text-gray-500 dark:text-gray-400">
						Thank you for being a crucial part of our history.
					</p>
				</section>
			</div>

		</>
	)
}
