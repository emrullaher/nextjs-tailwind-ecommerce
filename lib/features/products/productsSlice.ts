import { TProducts, IProduct } from "@/lib/definitions";
import { BRANDS, COLORS, SIZES } from "@/lib/utils/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface InitialState {
    products: TProducts;
    product: IProduct;
}

const initialState: InitialState = {
    products: [] as TProducts,
    product: {} as IProduct
};

export const getProducts = createAsyncThunk(
    "categories/getProducts",
    async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const products = await response.json();
        return products;
    }
);

export const getProductById = createAsyncThunk(
    "categories/getProductById",
    async (id: string) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
        let product = await response.json();
        product = addRandomValues(product);
        return product;
    }
);


export const { actions, reducer } = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            const products = action.payload as TProducts;

            products.forEach((product) => {
                addRandomValues(product);
            });

            state.products = products;
        });
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.product = action.payload as IProduct;
        });
    },
});

// This Method Adds Random Color, Size and Brand to Each Product
const addRandomValues = (product: IProduct) => {
    product.color = COLORS[Math.floor(Math.random() * COLORS.length)].value;
    product.size = SIZES[Math.floor(Math.random() * SIZES.length)].value;
    product.brand = BRANDS[Math.floor(Math.random() * BRANDS.length)].value;
    return product;
};
