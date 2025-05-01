import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  img: string;
  description: string;
  quantity: number;
}

const initialState: { cartItems: CartItem[] } = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
        const item = state.cartItems.find(i => i.id === action.payload.id)
        if (item) {
            item.quantity += 1
        } else {
            state.cartItems.push({ ...action.payload, quantity: 1 })
        }
    },
    removeFromCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
        const itemIndex = state.cartItems.findIndex(i => i.id === action.payload.id)
        if (itemIndex !== -1) {
            const item = state.cartItems[itemIndex]
            if (item.quantity > 1) {
            item.quantity -= 1
            } else {
            state.cartItems.splice(itemIndex, 1) // remove item entirely if quantity = 1
            }
        }
    }      
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
