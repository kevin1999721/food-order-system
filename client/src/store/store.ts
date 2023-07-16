import { configureStore } from '@reduxjs/toolkit';
import storesReducer from './stores/stores.slice';
import cartReducer from './cart/cart.slice';
import orderListsReducer from './order-lists/order-lists.slice';

export const store = configureStore({
	reducer: {
		stores: storesReducer,
		cart: cartReducer,
		orderLists: orderListsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
