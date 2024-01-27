import { Breadcrumb } from "@/lib/components/shared/breadcrumb";
import { getProductById, getProducts } from "@/lib/features/products/productsSlice";
import { store } from "@/lib/store";
import { shuffleArray } from "@/lib/utils/shuffle-array";
import { Metadata } from "next";
import { Card as ProductCard } from "@/lib/components/product/card";

import Head from "next/head";
import { ProductDetail } from "@/lib/components/pages/product/product-detail";

export function generateMetadata() {
	const { product } = store.getState().products;
	const metadata: Metadata = {
		title: 'Product Detail',
		description: 'Product Detail'
	};
	if (product.title) {
		metadata.title = product.title;
		metadata.description = product.description;
	}
	return metadata;
}


export default async function Page({ params }: { params: { id: string } }) {

	await store.dispatch(getProducts());
	await store.dispatch(getProductById(params.id));
	const { product, products } = store.getState().products;

	const relatedProducts = shuffleArray(products)
		.filter((p) => p.id !== product.id)
		.slice(0, 4);

	const sku = Math.random().toString(36).substring(2, 10).toUpperCase();

	return (<>
		<Head>
			<link href="/product-detail.css" rel="stylesheet" />
		</Head>
		<hr />
		<Breadcrumb
			breadcrumbs={[
				{
					name: 'products',
					url: `/products?category=${product.category}`
				},
				{
					name: product.title,
					url: `/products/${product.id}`
				}
			]}
		></Breadcrumb>


		<ProductDetail product={product} sku={sku}></ProductDetail>

		<div className="container mt-16 pb-16">
			<h2 className="mb-6 text-2xl font-medium uppercase text-gray-800 dark:text-white">
				Related products
			</h2>
			<div className="grids-cols:1 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
				{relatedProducts.map((product, i) => (
					<ProductCard product={product} key={`product-${i}`} />
				))}
			</div>
		</div>
	</>)
}


