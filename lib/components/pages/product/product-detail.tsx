'use client'

import { IProduct } from "@/lib/definitions"
import { setAlert } from "@/lib/features/alert/alertSlice";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface IImage {
    src: string;
    alt: string;
    isSelected: boolean;
}

export const ProductDetail = ({ product, sku }: { product: IProduct, sku: string }) => {
    const dispatch = useDispatch();

    const [images, setImages] = useState([] as IImage[])

    const [price, setPrice] = useState(0)
    const [discountPrice, setDiscountPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const handlePriceChange = () => {
        setPrice(product.price * quantity)
        setDiscountPrice(product.price + 399 * quantity)
    };

    useEffect(() => {
        setImages([
            { src: product.image, alt: product.title, isSelected: true },
            { src: 'https://random.imagecdn.app/1200/1200', alt: product.title, isSelected: false },
            { src: 'https://picsum.photos/1200/1200', alt: product.title, isSelected: false }
        ])
        handlePriceChange()
    }, [])

    return (<div className="container mt-10 grid gap-6 md:grid-cols-2">
        {images && images.length && (
            <div>
                <div className="bg-white py-2">
                    <img
                        src={images.find((x) => x.isSelected === true)?.src ?? ''}
                        alt={images.find((x) => x.isSelected === true)?.alt ?? ''}
                        className="mx-auto aspect-square"
                        style={{ maxHeight: '400px' }}
                    />
                </div>
                <div className="mt-16 grid grid-cols-5 gap-4">
                    {images.map((image, i) => (
                        <div key={`image-${i}`}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`bg-white ${image.isSelected === true
                                    ? 'aspect-square w-full cursor-pointer border p-2 border-teal-900 dark:border-red-600'
                                    : 'aspect-square w-full cursor-pointer border p-2'}`}
                                onClick={() => {
                                    setImages(images.map((x, index) => ({ ...x, isSelected: index === i })))
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )}

        <div>
            <div className="mb-5">
                <h2
                    className="mr-2 text-2xl font-bold uppercase text-orange-800 dark:text-orange-600 lg:text-3xl"
                >
                    {product.title}
                </h2>
                <div className="mt-4 flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        {[1, 2, 3, 4, 5].map((rating, i) => (
                            <svg
                                key={`rating-${i}`}
                                className="h-4 w-4 {i < Math.round(product.rating.rate)
                        ? 'text-yellow-300'
                        : 'text-gray-300'}"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                                data-rate={rating}
                            >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <p className="inline-flex w-[100%] space-x-2 align-middle font-semibold text-gray-800">
                    <span className="min-w-[100px] font-semibold text-gray-800 dark:text-gray-300">
                        Availability:
                    </span>
                    <span className="text-green-600">In Stock</span>
                </p>
                <p className="inline-flex w-[100%] space-x-2 align-middle">
                    <span className="min-w-[100px] font-semibold text-gray-800 dark:text-gray-300">Brand: </span>
                    <span className="capitalize text-gray-600 dark:text-gray-400">{product.brand}</span>
                </p>
                <p className="inline-flex w-[100%] space-x-2 align-middle">
                    <span className="min-w-[100px] font-semibold text-gray-800 dark:text-gray-300">Category: </span>
                    <span className="capitalize text-gray-600 dark:text-gray-400">{product.category}</span>
                </p>
                <p className="inline-flex w-[100%] space-x-2 align-middle">
                    <span className="min-w-[100px] font-semibold text-gray-800 dark:text-gray-300">SKU: </span>
                    <span className="text-gray-600 dark:text-gray-400">
                        {sku}
                    </span>
                </p>
                <p className="inline-flex w-[100%] space-x-2 align-middle font-semibold text-gray-800">
                    <span className="min-w-[100px] font-semibold text-gray-800 dark:text-gray-300">Color: </span>
                    <span
                        className="block h-6 w-6 rounded-sm border border-gray-200 shadow-sm"
                        style={{ backgroundColor: product.color }}
                    >
                    </span>
                </p>
                <p className="inline-flex w-[100%] space-x-2 align-middle font-semibold text-gray-800">
                    <span className="min-w-[100px] font-semibold text-gray-800 dark:text-gray-300">Size: </span>
                    <span
                        className="flex h-6 w-6 items-center justify-center rounded-sm border border-gray-200 text-xs uppercase text-gray-600 shadow-sm dark:text-gray-400"
                    >
                        {product.size}
                    </span>
                </p>
            </div>
            <div className="my-5 border-y border-y-gray-300 py-5 dark:border-y-transparent">
                <span className="min-w-[100px] font-semibold text-gray-800 dark:text-gray-300">
                    Description:
                </span>
                <p className="text-gray-600 dark:text-gray-400">
                    {product.description}
                </p>
            </div>
            <div className="flex justify-between pt-4 align-middle">
                <div>
                    <h3 className="text-md mb-1 font-medium uppercase text-gray-800 dark:text-white">Quantity</h3>
                    <div className="custom-number-input h-10 w-32">
                        <div className="relative mt-1 flex h-10 w-full flex-row rounded-lg bg-transparent">
                            <button
                                data-action="decrement"
                                className=" h-full w-20 cursor-pointer rounded-l bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700 dark:text-gray-400"
                                onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity(quantity - 1)
                                    };
                                    handlePriceChange();
                                }}
                            >
                                <span className="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input
                                type="number"
                                className="text-md md:text-basecursor-default flex w-full items-center bg-gray-300 text-center font-semibold text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none"
                                name="custom-input-number"
                                defaultValue={quantity}
                                onKeyUp={(e: any) => {
                                    const value = parseInt(e.target.value);
                                    if (value > 0) {
                                        setQuantity(value)
                                        handlePriceChange();
                                    }
                                }}
                                onBlur={(e: any) => {
                                    const value = parseInt(e.target.value || '0');
                                    if (value <= 0) {
                                        e.target.value = 1;
                                        setQuantity(1)
                                        handlePriceChange();
                                    }
                                }}
                            />
                            <button
                                data-action="increment"
                                className="h-full w-20 cursor-pointer rounded-r bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700 dark:text-gray-400"
                                onClick={() => {
                                    setQuantity(quantity + 1)
                                    handlePriceChange();
                                }}
                            >
                                <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-1 mt-4 text-right">
                    <p className="text-[14px] text-gray-400 line-through">
                        {discountPrice}$
                    </p>
                    <p className="text-3xl font-semibold text-blue-700">{price}$</p>
                </div>
            </div>
            <div className="gap-3 pb-5 pt-5 text-right">
                <button
                    className="inline-flex items-center gap-2 rounded border border-teal-600 bg-teal-600 px-8 py-2 font-medium uppercase text-white transition hover:bg-transparent hover:text-teal-600"
                    onClick={() => {
                        dispatch(addToCart({ product, quantity }));
                        dispatch(setAlert({ title: 'Success', message: 'Product added to cart', type: 'success' }));
                    }}
                >
                    <svg
                        className="bi bi-cart"
                        fill="currentColor"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    ></path>
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    </div>)
}