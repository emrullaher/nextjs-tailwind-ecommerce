import { configureStore } from "@reduxjs/toolkit";

import { reducer as categoriesReducer } from "@/lib/features/categories/categoriesSlice";
import { reducer as alertReducer } from "@/lib/features/alert/alertSlice";
import { reducer as ProductsReducer } from "@/lib/features/products/productsSlice";
import { reducer as authReducer } from "@/lib/features/auth/authSlice";
import { reducer as cartReducer } from "@/lib/features/cart/cartSlice";


export function makeStore(preloadedState = {}) {
    return configureStore({
        reducer: {
            categories: categoriesReducer,
            alert: alertReducer,
            products: ProductsReducer,
            auth: authReducer,
            cart: cartReducer,
        },
        preloadedState,
    });
}


export const store = makeStore();


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']