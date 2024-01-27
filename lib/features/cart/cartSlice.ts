import { IProduct } from "@/lib/definitions";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    carts: IProduct[],
    totalPrice: number
}

const initialState: InitialState = {
    carts: [],
    totalPrice: 0,
};
export const { actions, reducer } = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity } = action.payload;
            let exist = false;
            state.carts.forEach((item: IProduct) => {
                if (item.id === product.id) {
                    exist = true;
                    item.quantity += quantity;
                }
            });
            if (!exist) {
                state.carts.push({ ...product, quantity });
            }
            if (localStorage) {
                localStorage.removeItem('carts');
                localStorage.setItem('carts', JSON.stringify(state.carts));
            }
            calculateTotalPrice();
        },
        removeCart: (state, action) => {
            const product = action.payload;
            let _carts = state.carts.filter((item: IProduct) => item.id !== product.id);
            state.carts = _carts;
            if (localStorage) {
                localStorage.removeItem('carts');
                localStorage.setItem('carts', JSON.stringify(state.carts));
            }

            calculateTotalPrice();
        },
        getCarts: (state) => {
            state.carts = [];
            if (localStorage) {
                let _carts = localStorage.getItem('carts');
                if (_carts) {
                    state.carts = JSON.parse(_carts);
                }
            }
        },
        calculateTotalPrice: (state) => {
            getCarts();
            let total = 0;
            state.carts.forEach((item: IProduct) => {
                total += item.price * item.quantity;
            });

            state.totalPrice = total;
        }
    }
});

export const { getCarts, calculateTotalPrice, addToCart, removeCart } = actions;

