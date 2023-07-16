import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CartItem } from '../cart/cart.slice';
import {
	deleteOrderListById,
	postOrderList,
	OrderListToPost,
} from '../../utils/food-order-system-api/food-order-system-api.util';
import { resetCartItems } from '../cart/cart.slice';

export type Product = CartItem;

export type OrderList = {
	id: number;
	store: {
		id: number;
		name: string;
	};
	products: Product[];
	count: number;
	total: number;
	createAt: string;
};

type OrderListsState = {
	orderLists: OrderList[];
	isLoading: boolean;
	error: any;
};

const initialState: OrderListsState = {
	orderLists: [],
	isLoading: false,
	error: null,
};

export const thunkPostOrderList = createAsyncThunk<OrderList[], OrderListToPost>(
	'orderLists/PostOrderList',
	async (orderListToPost: OrderListToPost, thunkApi) => {
		const { rejectWithValue, dispatch } = thunkApi;
		try {
			const response = await postOrderList(orderListToPost);
			dispatch(resetCartItems());
			return response;
		} catch (error) {
			rejectWithValue(error);
		}
	}
);

export const thunkDeleteOrderListById = createAsyncThunk<OrderList[], number>(
	'orderLists/DeleteOrderListById',
	async (orderListId: number, thunkApi) => {
		const { rejectWithValue } = thunkApi;
		try {
			const response = await deleteOrderListById(orderListId);
			return response;
		} catch (error) {
			rejectWithValue(error);
		}
	}
);

const orderListsSlice = createSlice({
	name: 'orderLists',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(thunkPostOrderList.pending, state => {
			state.isLoading = true;
		});

		builder.addCase(thunkPostOrderList.fulfilled, (state, action) => {
			state.orderLists = action.payload;
			state.isLoading = false;
		});

		builder.addCase(thunkPostOrderList.rejected, (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		});

		builder.addCase(thunkDeleteOrderListById.pending, state => {
			state.isLoading = true;
		});

		builder.addCase(thunkDeleteOrderListById.fulfilled, (state, action) => {
			state.orderLists = action.payload;
			state.isLoading = false;
		});

		builder.addCase(thunkDeleteOrderListById.rejected, (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		});
	},
});

export default orderListsSlice.reducer;
