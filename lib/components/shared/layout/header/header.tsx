'use client'
import { Logo } from '@/lib/components/shared/logo'
import { Cart } from '@/lib/components/shared/cart'
import { UserMenu } from '@/lib/components/shared/layout/header/user-menu'
import { DarkModeToggle } from '@/lib/components/shared/layout/header/dark-mode-toggle';

import { IUser, TCategories } from '@/lib/definitions';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useSearchParams } from 'next/navigation';


export const Header = () => {

	const categories: TCategories = useSelector((state: RootState) => state.categories.categories);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [currentCategory, setCurrentCategory] = useState('');

	const searchParams = useSearchParams();
	const categoryQuery = searchParams.get('category');

	useEffect(() => {
		if (categoryQuery?.includes(',')) {
			setCurrentCategory(categoryQuery.split(',')[0]);
		}
		else {
			setCurrentCategory(categoryQuery || '');
		}
	}, [categoryQuery]);

	return (<>
		<nav className="relative bg-white shadow dark:bg-gray-800">
			<div className="container mx-auto flex items-center justify-between px-6 py-4">
				<Link href='/'>
					<Logo />
				</Link>
				<div className="flex items-center justify-between md:order-2">
					<div className="flex items-center justify-center">
						<DarkModeToggle></DarkModeToggle>
						<Cart />
						<UserMenu />
					</div>

					<div className="flex lg:hidden">
						<button
							onClick={() => {
								document.body.classList.toggle('overflow-hidden');
								setIsMenuOpen(!isMenuOpen);
							}}
							type="button"
							className="ml-4 text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
							aria-label="toggle menu"
						>
							{!isMenuOpen && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
								</svg>
							)}
							{isMenuOpen && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`${isMenuOpen
						? 'translate-x-0 opacity-100 '
						: '-translate-x-full opacity-0'} absolute inset-x-0 top-[70px] z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out dark:bg-gray-800 md:relative md:top-0 md:top-[unset] md:order-1 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100`}
				>
					<div className="flex flex-col md:mx-6 md:flex-row">
						{categories && categories.length > 0 && (
							categories.map((category, i) => {
								return (
									<Link
										key={`header-category-${i}`}
										className={`${currentCategory === category
											? 'text-blue-500 dark:text-blue-500 font-medium'
											: 'text-gray-700 dark:text-gray-200'} my-2 transform capitalize transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
										href={`/products?category=${category}`}
									>
										{category}
									</Link>
								)
							}
							))}
					</div>
				</div>
			</div>
		</nav>
	</>)
}



