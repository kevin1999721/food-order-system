import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchStores } from '../../utils/food-order-system-api/food-order-system-api.util';

export type Category = {
	key: string;
	description: string;
};

export type CategoryItem = {
	id: number;
	name: string;
	price: number;
};

export type Menu = {
	[key: string]: CategoryItem[];
};

export type Store = {
	id: number;
	name: string;
	description: string;
	location: string;
	phone: string;
	categories: Category[];
	menu: Menu;
};

type StoresState = {
	selectedStoreId: number | null;
	stores: Store[];
	isLoading: boolean;
	error: any;
};

const initialState: StoresState = {
	selectedStoreId: null,
	stores: [],
	isLoading: false,
	error: null,
};

export const thunkFetchStores = createAsyncThunk<Store[]>(
	'stores/fetchStores',
	async (_, thunkApi) => {
		const { rejectWithValue } = thunkApi;
		try {
			const stores = await fetchStores();
			return stores;
		} catch (error) {
			rejectWithValue(error);
		}
	}
);

export const storesSlice = createSlice({
	name: 'stores',
	initialState,
	reducers: {
		setSelectedStoreId: (state, action: PayloadAction<number | null>) => {
			state.selectedStoreId = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(thunkFetchStores.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(thunkFetchStores.fulfilled, (state, action) => {
			state.stores = action.payload;
			state.isLoading = false;
		});

		builder.addCase(thunkFetchStores.rejected, (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		});
	},
});

export const { setSelectedStoreId } = storesSlice.actions;
export default storesSlice.reducer;
