import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	cartReducer => cartReducer.items
);

export const selectCartItmesCount = createSelector([selectCartItems], cartItems => {
	return cartItems.reduce<number>((pre, cur) => pre + cur.quantity, 0);
});

export const selectCartItmesTotal = createSelector([selectCartItems], cartItems => {
	return cartItems.reduce<number>((pre, cur) => pre + cur.quantity * cur.price, 0);
});
