import { selectCartItems, selectCartItmesTotal, selectCartItmesCount } from '../cart.select';

const mockState = {
	stores: {
		selectedStoreId: null,
		stores: [],
		isLoading: false,
		error: null,
	},
	cart: {
		items: [
			{ id: 1, name: 'item 1', price: 10, quantity: 2 },
			{ id: 2, name: 'item 2', price: 20, quantity: 3 },
		],
	},
	orderLists: { orderLists: [], isLoading: false, error: null },
};

describe('cart select test !', () => {
	test('selectCartItems should return cart items', () => {
		const cartItems = selectCartItems(mockState);
		expect(cartItems).toEqual(mockState.cart.items);
	});

	test('selectCartItmesTotal should return cart items tootal', () => {
		const cartItems = selectCartItmesTotal(mockState);
		expect(cartItems).toBe(80);
	});

	test('selectCartItmesCount should return cart items count', () => {
		const cartItems = selectCartItmesCount(mockState);
		expect(cartItems).toEqual(5);
	});
});
