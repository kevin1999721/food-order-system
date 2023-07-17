import { selectOrderLists } from '../order-lists.select';

const mockState = {
	stores: {
		selectedStoreId: null,
		stores: [],
		isLoading: false,
		error: null,
	},
	cart: { items: [] },
	orderLists: { orderLists: [], isLoading: false, error: null },
};

describe('orderLists select test !', () => {
	test('selectOrderLists should return orderLists', () => {
		const orderLists = selectOrderLists(mockState);

		expect(orderLists).toEqual(mockState.orderLists.orderLists);
	});
});
