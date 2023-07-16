import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectOrderListsReducer = (state: RootState) => state.orderLists;

export const selectOrderLists = createSelector(
	[selectOrderListsReducer],
	orderListsReducer => orderListsReducer.orderLists
);
