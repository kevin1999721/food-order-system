import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.util';
import { Store } from '../../../store/stores/stores.slice';
import { initialPreloadedState } from '../../../utils/test/test.util';

import StoreListItem from '../store-list-item.component';

const mockStore: Store = {
	id: 1,
	description: 'desc',
	name: 'store-1',
	location: 'location',
	phone: '12345',
	categories: [{ key: 'category-1', description: 'category-1 Desc' }],
	menu: {
		'category-1': [
			{ id: 1, name: 'item-1', price: 10 },
			{ id: 2, name: 'item-2', price: 20 },
		],
	},
};

describe('store-list-item component test !', () => {
	test('it should render correctly with props store', () => {
		renderWithProviders(<StoreListItem store={mockStore} />);

		expect(screen.getByText('store-1')).toBeInTheDocument();
		expect(screen.getByText('location')).toBeInTheDocument();
	});

	test('it should set selectedStoreId when button click', async () => {
		const { store } = renderWithProviders(<StoreListItem store={mockStore} />);

		const button = screen.getByRole('button');

		expect(store.getState().stores.selectedStoreId).toBe(null);
		await fireEvent.click(button);
		expect(store.getState().stores.selectedStoreId).toBe(1);
	});

	test('it should reset the cart items if change selectedStoreId', async () => {
		const { store } = renderWithProviders(<StoreListItem store={mockStore} />, {
			preloadedState: {
				...initialPreloadedState,
				cart: {
					items: [{ id: 1, name: 'item', price: 10, quantity: 1 }],
				},
			},
		});

		const button = screen.getByRole('button');

		expect(store.getState().cart.items).toEqual([{ id: 1, name: 'item', price: 10, quantity: 1 }]);
		await fireEvent.click(button);
		expect(store.getState().cart.items).toEqual([]);
	});
});
