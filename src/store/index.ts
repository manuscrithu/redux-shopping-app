import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../store/cartSlice';
import { CartState } from '../store/cartSlice';

export interface RootState {
    cart: CartState;
}

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export type AppDispatch = typeof store.dispatch;