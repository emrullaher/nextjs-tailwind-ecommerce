import { TCategories } from '@/lib/definitions'
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({ categories }: { categories: TCategories }) => {
	return (
		<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
			{categories.map((category, i) => (
				<div 
					key={`card-${i}`}
				className="group relative overflow-hidden rounded-sm">
					<Image
						className="h-full w-full transform object-cover transition group-hover:scale-110"
						src={`/images/categories/${category}.jpg`}
						alt={category}
						width={300}
						height={300}
					/>
					<Link
						className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 font-roboto text-xl font-medium capitalize text-white transition group-hover:bg-opacity-60"
						href={`/products?category=${category}`}
					>
						{category}
					</Link>
				</div>
			))}
		</div>
	)
}




