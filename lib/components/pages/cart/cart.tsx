'use client'

import { calculateTotalPrice, getCarts, removeCart } from "@/lib/features/cart/cartSlice";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../shared/cart-item";
import { setAlert } from "@/lib/features/alert/alertSlice";
import Link from "next/link";

export const Cart = () => {

    const dispatch = useDispatch();
    const carts = useSelector((state: RootState) => state.cart.carts);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

    useEffect(() => {
        dispatch(getCarts());
        dispatch(calculateTotalPrice());
    }, [])


    const vat = 20;

    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setSubTotal(totalPrice);
        setDiscount(Math.round(subTotal * 0.2));
        setTotal(parseInt((subTotal + vat - discount).toFixed(2)));
    }, [totalPrice]);


    return (<>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <header className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-gray-300 sm:text-3xl">Your Cart</h1>
                </header>

                <div className="mt-8">
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
                    <div className="mt-8 flex justify-end pt-8">
                        <div className="w-screen max-w-lg space-y-4">
                            <dl className="space-y-0.5 text-sm text-gray-700 dark:text-gray-400">
                                <div className="flex justify-between">
                                    <dt>Subtotal</dt>
                                    <dd>{subTotal}$</dd>
                                </div>

                                <div className="flex justify-between">
                                    <dt>VAT</dt>
                                    <dd>{vat}$</dd>
                                </div>

                                <div className="flex justify-between">
                                    <dt>Discount</dt>
                                    <dd>-{discount}$</dd>
                                </div>

                                <div className="flex justify-between !text-base font-medium">
                                    <dt>Total</dt>
                                    <dd>{total}$</dd>
                                </div>
                            </dl>

                            <div className="flex justify-end">
                                <span
                                    className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="-ms-1 me-1.5 h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                        />
                                    </svg>

                                    <p className="whitespace-nowrap text-xs">%20 Discount Applied</p>
                                </span>
                            </div>

                            <div className="flex justify-end">
                                <Link
                                    href="/coming-soon"
                                    className="block rounded bg-teal-600 px-5 py-3 text-sm text-gray-100 transition"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}