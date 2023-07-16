import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectStoresReducer = (state: RootState) => state.stores;

export const selectStores = createSelector(
	[selectStoresReducer],
	storesReducer => storesReducer.stores
);

export const selectSelectedStoreId = createSelector(
	[selectStoresReducer],
	storesReducer => storesReducer.selectedStoreId
);

export const selectStoreById = createSelector(
	[selectStores, selectSelectedStoreId],
	(stores, selectedStoreId) => {
		if (selectedStoreId || selectedStoreId === 0) {
			const store = stores.find(store => store.id === selectedStoreId);
			return store || null;
		} else {
			return null;
		}
	}
);
