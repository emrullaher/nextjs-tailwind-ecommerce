'use client'

import { IProduct } from "@/lib/definitions";
import { setAlert } from "@/lib/features/alert/alertSlice";
import { addToCart } from "@/lib/features/cart/cartSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";


export const Card = ({ product, grid = true }: { product: IProduct, grid?: boolean }) => {
    const dispatch = useDispatch();

    const getDesc = () => {
        if (!grid) return product.description;

        if (product.description.length > 100) {
            return `${product.description.substring(0, 100)}...`;
        }
        return product.description;
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(addToCart({ product: product, quantity: 1 }));
        dispatch(setAlert({ title: 'Success', message: 'Product added to cart', type: 'success' }));
    };

    return (
        <Link
            href={`/products/${product.id}`}
            className={
                `flex h-full overflow-hidden rounded-lg bg-white shadow-lg dark:border dark:border-gray-400 dark:bg-transparent 
                ${grid ? 'flex-col' : 'flex-col sm:flex-row'}
            `}
        >
            <div className={`bg-white p-6 ${grid ? 'p-4' : 'w-full sm:w-1/4'}`}>
                <div
                    className={`bg-contain bg-center bg-no-repeat ${grid ? 'h-[240px]' : 'h-[150px] w-full'}`}
                    style={{ backgroundImage: `url(${product.image})` }}
                ></div>
            </div>
            <div className={`flex h-full flex-col p-4 ${grid ? '' : 'sm:w-3/4'}`}>
                <h1 className="text-md font-bold text-gray-900 dark:text-white md:text-2xl">{product.title}</h1>
                <p className="mb-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {getDesc()}
                </p>
                <div className="item-center mt-auto flex">
                    {[1, 2, 3, 4, 5].map((rating, i) => (
                        <svg
                            key={`star-${i}`}
                            data-rate={rating}
                            className={`h-5 w-5 fill-current ${i < Math.round(product.rating.rate)
                                ? 'text-yellow-300'
                                : 'text-gray-300'}`}
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                            />
                        </svg>
                    ))}
                </div>
                <div className="item-center mt-2 flex flex-wrap justify-between">
                    <h1 className="text-xl font-bold text-gray-700 dark:text-gray-300">{product.price}$</h1>
                    <button
                        onClick={handleClick}
                        className="rounded bg-gray-800 p-3 text-xs font-bold uppercase text-white"
                    >
                        Add to Card
                    </button>
                </div>
            </div>
        </Link >
    );
}

