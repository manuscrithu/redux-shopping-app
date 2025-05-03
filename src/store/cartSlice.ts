import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../types";

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = state.cartItems.find(i => i.id === action.payload.id)
            if (item) {
                item.quantity += 1
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const itemIndex = state.cartItems.findIndex(i => i.id === action.payload.id)
            if (itemIndex !== -1) {
                const item = state.cartItems[itemIndex]
                if (item.quantity > 1) {
                    item.quantity -= 1
                } else {
                    state.cartItems.splice(itemIndex, 1)
                }
            }
        }      
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer