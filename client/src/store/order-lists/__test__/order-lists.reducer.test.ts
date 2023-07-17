import orderListsReducer from '../order-lists.slice';

const initialState = {
	orderLists: [],
	isLoading: false,
	error: null,
};

describe('orderLists reducer test !', () => {
	test('it should return initial state', () => {
		expect(orderListsReducer(undefined, { type: undefined })).toEqual(initialState);
	});
});
