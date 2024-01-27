export interface IProduct {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: IRating
	color: string
	size: string
	brand: string
	quantity: number
}

export interface IRating {
	rate: number
	count: number
}

export type TProducts = IProduct[]


export interface IPerson {
	name: string
	role: string
	image: string
}

export type TTeam = IPerson[]


export interface IQuestion {
	question: string;
	answer: string;
}

export type TQuestions = IQuestion[];


export interface IJob {
	category: string;
	title: string;
	type: string;
	location: string;
}

export type TJobs = IJob[];


export type TCategories = string[]


export interface IBreadcrumb {
	name: string
	url: string
}

export type TBreadcrumbs = IBreadcrumb[]


export interface IFilter {
	name: string;
	value: string;
	type: string;
	checked: boolean;
}

export interface IFilters {
	categories: IFilter[];
	brands: IFilter[];
	size: IFilter[];
	color: IFilter[];
	rating: IFilter[];
}

export interface IAlert {
	title: string;
	message: string;
	type: 'success' | 'error' | 'info' | 'warning';
}

export interface IAddress {
	geolocation: {
		lat: string;
		long: string;
	};
	city: string;
	street: string;
	number: number;
	zipcode: string;
}

export interface IName {
	firstname: string;
	lastname: string;
}

export interface IUser {
	address: IAddress;
	id: number;
	email: string;
	username: string;
	password: string;
	name: IName;
	phone: string;
	__v: number;
}