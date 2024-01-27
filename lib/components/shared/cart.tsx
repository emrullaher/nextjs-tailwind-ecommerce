'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { calculateTotalPrice, getCarts, removeCart } from "@/lib/features/cart/cartSlice";
import { CartItem } from "./cart-item";
import { setAlert } from "@/lib/features/alert/alertSlice";
import { useSelectedLayoutSegment } from "next/navigation";


export const Cart = () => {
	const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

	const dispatch = useDispatch();
	const carts = useSelector((state: RootState) => state.cart.carts);

	useEffect(() => {
		dispatch(getCarts());
		dispatch(calculateTotalPrice());
	}, [])

	const activeSegment = useSelectedLayoutSegment();


	useEffect(() => {
		setIsCartDrawerOpen(false);
	}, [activeSegment]);

	return (<>
		<button
			onClick={() => {
				setIsCartDrawerOpen(!isCartDrawerOpen);
			}}
			className="relative transform text-gray-700 transition-colors duration-300 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-300"
		>
			<div className="align-center flex justify-center">
				<svg
					className="bi bi-cart"
					fill="currentColor"
					height="20"
					viewBox="0 0 16 16"
					width="20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
					/>
				</svg>
			</div>
			{carts.length > 0 && (
				<div
					className="absolute -right-2.5 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white"
				>
					{carts.length}
				</div>
			)}

		</button>

		{isCartDrawerOpen && (
			<>
				<div
					id="drawer-right-example"
					className={`fixed right-0 top-0 z-40 h-screen translate-x-full overflow-y-auto bg-white p-4 dark:bg-gray-900 md:min-w-[400px] md:max-w-[600px] ${isCartDrawerOpen
						? 'transform-none'
						: 'transition-transform'}`}
					tabIndex={-1}
					aria-labelledby="drawer-right-label"
				>
					<div className="flex h-full flex-col">
						<h5
							id="drawer-right-label"
							className="mb-4 inline-flex items-center text-xl font-semibold text-teal-600"
						>
							Cart
						</h5>
						<button
							type="button"
							data-drawer-hide="drawer-right-example"
							aria-controls="drawer-right-example"
							className="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
							onClick={() => {
								setIsCartDrawerOpen(!isCartDrawerOpen);
							}}
						>
							<svg
								className="h-3 w-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
							<span className="sr-only">Close menu</span>
						</button>
						<hr />
						<div className="my-4 space-y-6 overflow-auto">
							{carts && carts.length > 0 && (
								<ul className="space-y-4">
									{carts.map((cart, i) => (
										<li
											key={`cart-${i}`}
											className={`flex items-center gap-4 border-b pb-2 ${i !== carts.length - 1
												? 'border-b-gray-300 '
												: 'border-b-transparent'}`}
										>
											<CartItem
												cart={cart}
												onProductClick={(e: React.MouseEvent) => {
													e.preventDefault();
													setIsCartDrawerOpen(!isCartDrawerOpen);
												}}
												onRemove={(e: React.MouseEvent) => {
													e.preventDefault();
													dispatch(removeCart(cart));
													dispatch(setAlert({
														title: 'Success',
														message: 'Item removed from cart',
														type: 'success'
													}));
												}}
											/>
										</li>
									))}
								</ul>
							)}

							{!carts?.length && (
								<div className="text-center">
									<p className="text-gray-600">Your cart is empty.</p>
								</div>
							)}
						</div>

						<div className="mt-auto space-y-4 text-center">
							{carts && carts.length > 0 && (
								<>
									<Link
										href="/cart"
										className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400 dark:border-gray-300 dark:text-gray-300 hover:dark:bg-gray-300 hover:dark:text-black"
										onClick={() => {
											setIsCartDrawerOpen(!isCartDrawerOpen);
										}}
									>
										View my cart ({carts.length})
									</Link>

									<Link
										href="/coming-soon"
										className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 dark:bg-teal-600"
									>
										Checkout
									</Link>
								</>
							)}
							{!carts?.length}{
								<Link
									href="/products"
									className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 dark:bg-teal-600"
									onClick={() => {
										setIsCartDrawerOpen(!isCartDrawerOpen);
									}}
								>
									Shop now
								</Link>
							}

							<button
								className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600 dark:text-gray-300"
								onClick={() => {
									setIsCartDrawerOpen(!isCartDrawerOpen);
								}}
							>
								Continue shopping
							</button>
						</div>
					</div>
				</div>
				<div
					className={`fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80 ${isCartDrawerOpen
						? 'd-block'
						: 'hidden'}`}
					onClick={() => {
						setIsCartDrawerOpen(!isCartDrawerOpen);
					}}
				></div>
			</>
		)
		}
	</>
	)
}
