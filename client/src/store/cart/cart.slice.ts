import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryItem } from '../stores/stores.slice';

export type CartItem = CategoryItem & { quantity: number };

type CartState = {
	items: CartItem[];
};

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state, action: PayloadAction<CategoryItem>) => {
			const { payload: itemToAdd } = action;
			const { items: originCartItems } = state;

			const existCartItemIndex = originCartItems.findIndex(
				cartItem => cartItem.id === itemToAdd.id
			);

			if (existCartItemIndex >= 0) {
				originCartItems[existCartItemIndex].quantity += 1;
			} else {
				originCartItems.push({ ...itemToAdd, quantity: 1 });
			}
		},
		changeCartItemQuantityByID: (
			state,
			action: PayloadAction<{ id: number; changeQuantity: number }>
		) => {
			const { id: itemIdToChange, changeQuantity } = action.payload;
			const { items: originCartItems } = state;

			const existCartItemIndex = originCartItems.findIndex(
				cartItem => cartItem.id === itemIdToChange
			);

			if (existCartItemIndex >= 0) {
				const cartItem = state.items[existCartItemIndex];

				if (cartItem.quantity + changeQuantity <= 0) {
					originCartItems.splice(existCartItemIndex, 1);
				} else {
					cartItem.quantity += changeQuantity;
				}
			}
		},
		removeItemFromCartById: (state, action: PayloadAction<number>) => {
			const { payload: itemIdToRemove } = action;
			const { items: originCartItems } = state;

			const existCartItemIndex = originCartItems.findIndex(
				cartItem => cartItem.id === itemIdToRemove
			);

			if (existCartItemIndex >= 0) {
				originCartItems.splice(existCartItemIndex, 1);
			}
		},
		resetCartItems: state => {
			state.items = [];
		},
	},
});

export const { addItemToCart, changeCartItemQuantityByID, removeItemFromCartById, resetCartItems } =
	cartSlice.actions;
export default cartSlice.reducer;
