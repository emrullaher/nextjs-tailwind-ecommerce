import { Cart as CartPage } from "@/lib/components/pages/cart/cart";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cart | Fake Store",
	description: "Shopping cart page for Fake Store",
}
  
export default function Cart() {
	return (
		<>
			<hr />
			<section className="py-5">
				<CartPage />
			</section>
		</>
	)
}

