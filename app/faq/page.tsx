import { Metadata } from 'next'
import { TQuestions } from "@/lib/definitions"

export const metadata: Metadata = {
	title: 'FAQs | Fake Store',
	description: "Frequently asked questions",
};

export default function Faq() {
	const questions: TQuestions = [
		{
			question: 'What is FakeStore?',
			answer:
				'FakeStore is your gateway to a virtual marketplace where you can explore a wide range of products. Our platform offers a diverse selection of items, from fashion to electronics, ensuring a unique and satisfying shopping experience.'
		},
		{
			question: 'How Does FakeStore Ensure Product Quality?',
			answer:
				'At FakeStore, we prioritize quality. We collaborate with reputable sellers and conduct thorough checks to ensure that the products listed on our platform meet high standards. Your satisfaction and confidence in our offerings are our top priorities.'
		},
		{
			question: 'Is Shopping on FakeStore Secure?',
			answer:
				'Yes, your security is our priority. FakeStore employs robust security measures to protect your personal and financial information. Shop with confidence, knowing that your data is handled with the utmost care.'
		},
		{
			question: 'What Payment Methods Does FakeStore Accept?',
			answer:
				'FakeStore accepts a variety of payment methods to provide flexibility for our users. You can securely make transactions using credit/debit cards, digital wallets, and other convenient payment options.'
		},
		{
			question: 'How Can I Track My Orders on FakeStore?',
			answer:
				"Tracking your orders is easy with FakeStore. Once your purchase is confirmed, you'll receive a tracking number. Simply enter it on our website, and you can monitor your order's journey from our platform to your doorstep."
		},
		{
			question: 'What Should I Do If I Encounter Issues with My Order?',
			answer:
				'Customer satisfaction is our priority. If you encounter any issues with your order, our dedicated support team is here to assist you. Contact us through our customer support portal, and we will work to resolve any concerns promptly.'
		}
	];
	return (
		<>
			<hr />
			<section>
				<div className="container mx-auto px-6 py-12">
					<h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
						Frequently asked questions.
					</h1>

					<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 xl:grid-cols-3">

						{questions.map(({question,answer}) => (
							<div key={question}>
								<div className="inline-block rounded-lg bg-teal-600 p-3 text-white">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<h1 className="text-xl font-semibold text-gray-700 dark:text-white">
										{question}
									</h1>

									<p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
										{answer}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}


