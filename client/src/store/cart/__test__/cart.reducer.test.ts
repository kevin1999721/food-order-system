import cartReducer, {
	addItemToCart,
	removeItemFromCartById,
	changeCartItemQuantityByID,
	resetCartItems,
} from '../cart.slice';

const initialState = {
	items: [],
};

describe('cart reducer test !', () => {
	test('it should return initial state', () => {
		expect(cartReducer(undefined, { type: undefined })).toEqual(initialState);
	});

	test('it should add new item to cart', () => {
		const mockCartItem = {
			id: 1,
			name: 'item 1',
			price: 10,
			quantity: 1,
		};

		expect(cartReducer(initialState, addItemToCart(mockCartItem))).toEqual({
			items: [mockCartItem],
		});
	});

	test('it should remove item from cart by id', () => {
		const mockCart = {
			items: [
				{
					id: 1,
					name: 'item 1',
					price: 10,
					quantity: 1,
				},
			],
		};

		const expectState = {
			items: [],
		};

		expect(cartReducer(mockCart, removeItemFromCartById(1))).toEqual(expectState);
	});

	test('it should change cart item quantity by id', () => {
		const mockCart = {
			items: [
				{
					id: 1,
					name: 'item 1',
					price: 10,
					quantity: 1,
				},
			],
		};

		const expectState = {
			items: [
				{
					id: 1,
					name: 'item 1',
					price: 10,
					quantity: 2,
				},
			],
		};

		expect(cartReducer(mockCart, changeCartItemQuantityByID({ id: 1, changeQuantity: 1 }))).toEqual(
			expectState
		);
	});

	test('cart item should be removed if changed quantity <= 0', () => {
		const mockCart = {
			items: [
				{
					id: 1,
					name: 'item 1',
					price: 10,
					quantity: 1,
				},
			],
		};

		const expectState = {
			items: [],
		};

		expect(
			cartReducer(mockCart, changeCartItemQuantityByID({ id: 1, changeQuantity: -1 }))
		).toEqual(expectState);
	});

	test('it should reset cart items', () => {
		const mockCart = {
			items: [
				{
					id: 1,
					name: 'item 1',
					price: 10,
					quantity: 1,
				},
			],
		};

		const expectState = {
			items: [],
		};

		expect(cartReducer(mockCart, resetCartItems())).toEqual(expectState);
	});
});
