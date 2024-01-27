'use client'
/* this file jsx because of this issue https://github.com/Splidejs/splide/issues/1248 */
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import '@/lib/components/product/slider.css'
import { Card as ProductCard } from '@/lib/components/product/card'

export const Slider = ({ products }) => {
	const options = {
		gap: '1rem',
		autoplay: false,
		arrows: false,
		pagination: {
			dots: true
		},
		isNavigation: false,
		perPage: 4,
		autoHeight: true,
		breakpoints: {
			560: {
				perPage: 1
			},
			768: {
				perPage: 2
			},
			1600: {
				perPage: 3
			}
		}
	};

	return (
		<Splide id="products" aria-label="Product Images" className="py-5" options={options} hasTrack={false}>
			<SplideTrack>
				{products.map((product, i) => (
					<SplideSlide className="py-5" key={`product-${i}`}>
						<ProductCard product={product} />
					</SplideSlide>
				))}
			</SplideTrack>
		</Splide>
	)
}


