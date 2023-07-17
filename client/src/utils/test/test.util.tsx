import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { store, RootState } from '../../store/store';

import storesReducer from '../../store/stores/stores.slice';
import cartReducer from '../../store/cart/cart.slice';
import orderListsReducer from '../../store/order-lists/order-lists.slice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: typeof store;
}

export const initialPreloadedState = {
	stores: { selectedStoreId: null, stores: [], isLoading: false, error: null },
	cart: { items: [] },
	orderLists: { orderLists: [], isLoading: false, error: null },
};

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = initialPreloadedState,
		store = configureStore({
			reducer: { stores: storesReducer, cart: cartReducer, orderLists: orderListsReducer },
			preloadedState,
		}),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return <Provider store={store}>{children}</Provider>;
	}

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
