import { selectStores, selectSelectedStoreId, selectStoreById } from '../stores.select';

const mockState = {
	stores: {
		selectedStoreId: 1,
		stores: [
			{
				id: 1,
				name: '活力早餐店',
				description: '一日之計在於晨，快來吃營養又美味的早餐吧 ~',
				location: '台北市信義區中正路1號',
				phone: '0900123123',
				categories: [
					{ key: 'eggCake', description: '蛋餅' },
					{ key: 'sandwich', description: '三明治' },
				],
				menu: {
					eggCake: [
						{
							id: 1,
							name: '原味蛋餅',
							price: 30,
						},
					],
					sandwich: [
						{
							id: 6,
							name: '火腿三明治',
							price: 40,
						},
					],
				},
			},
		],
		isLoading: false,
		error: null,
	},
	cart: { items: [] },
	orderLists: { orderLists: [], isLoading: false, error: null },
};

describe('Stores select test !', () => {
	test('selectStores should return stores', () => {
		const stores = selectStores(mockState);
		expect(stores).toEqual(mockState.stores.stores);
	});

	test('selectSelectedStoreId should return selectedStoreId', () => {
		const selectedStoreId = selectSelectedStoreId(mockState);
		expect(selectedStoreId).toEqual(mockState.stores.selectedStoreId);
	});

	test('selectStoreById should return store by selected store id', () => {
		const store = selectStoreById(mockState);
		expect(store).toEqual(mockState.stores.stores[0]);
	});

	test('selectStoreById should return store by selected store id', () => {
		const store = selectStoreById(mockState);
		expect(store).toEqual(mockState.stores.stores[0]);
	});

	test('selectStoreById should return null when selected store id is null or not find store', () => {
		expect(
			selectStoreById({ ...mockState, stores: { ...mockState.stores, selectedStoreId: null } })
		).toBe(null);

		expect(
			selectStoreById({ ...mockState, stores: { ...mockState.stores, selectedStoreId: 2 } })
		).toBe(null);
	});
});
