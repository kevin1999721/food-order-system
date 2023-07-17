import storesReducer, { setSelectedStoreId } from '../stores.slice';

const initialState = {
	selectedStoreId: null,
	stores: [],
	isLoading: false,
	error: null,
};

describe('stores reducer test !', () => {
	test('it should return initial state', () => {
		expect(storesReducer(undefined, { type: undefined })).toEqual(initialState);
	});

	test('it should set new selectedStoreId', () => {
		expect(storesReducer(initialState, setSelectedStoreId(1))).toEqual({
			...initialState,
			selectedStoreId: 1,
		});
	});
});
