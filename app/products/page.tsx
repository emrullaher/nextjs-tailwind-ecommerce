import { ProductPage } from "@/lib/components/pages/product/product-page"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Products",
	description: "Products page"
}

export default function Page() {
	return (
		<>
			<ProductPage />
		</>
	)
}