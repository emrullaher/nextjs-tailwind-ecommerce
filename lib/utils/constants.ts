export interface Specs {
	name: string;
	value: string;
}

export const SIZES: Specs[] = [
	{ name: 'XS', value: 'xs' },
	{ name: 'S', value: 's' },
	{ name: 'M', value: 'm' },
	{ name: 'L', value: 'l' },
	{ name: 'XL', value: 'xl' }
];

export const COLORS: Specs[] = [
	{ name: 'Red', value: 'red' },
	{ name: 'Blue', value: 'blue' },
	{ name: 'Green', value: 'green' },
	{ name: 'Yellow', value: 'yellow' },
	{ name: 'Black', value: 'black' }
];

export const BRANDS: Specs[] = [
	{ name: 'Apple', value: 'apple' },
	{ name: 'Samsung', value: 'samsung' },
	{ name: 'Sony', value: 'sony' },
	{ name: 'Adidas', value: 'adidas' },
	{ name: 'Puma', value: 'puma' }
];

export const RATINGS: Specs[] = [
	{ name: '1 star', value: '1' },
	{ name: '2 stars', value: '2' },
	{ name: '3 stars', value: '3' },
	{ name: '4 stars', value: '4' },
	{ name: '5 stars', value: '5' }
];
