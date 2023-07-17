import { renderWithProviders } from '../../../utils/test/test.util';
import { screen, fireEvent } from '@testing-library/react';
import { initialPreloadedState } from '../../../utils/test/test.util';
import * as useApphooks from '../../../store/hooks';

import Cart from '../cart.component';

describe('cart component test !', () => {
	test('it should render correctly with cartItems, count and total', () => {
		renderWithProviders(<Cart />, {
			preloadedState: {
				...initialPreloadedState,
				cart: {
					items: [
						{ id: 1, name: 'item1', price: 10, quantity: 1 },
						{ id: 2, name: 'item2', price: 20, quantity: 2 },
					],
				},
			},
		});

		expect(screen.getByText('總數量 3')).toBeInTheDocument();
		expect(screen.getByText('總金額 $50')).toBeInTheDocument();
	});

	test('it should render no items notice when cartItems is empty', () => {
		renderWithProviders(<Cart />);
		expect(screen.getByText('尚無商品')).toBeInTheDocument();
	});

	test('submit button should be disabled when total <= 0', () => {
		renderWithProviders(<Cart />);
		expect(screen.getByRole('button')).toHaveAttribute('disabled');
	});

	test('it should dispatch once when button click', async () => {
		const mockDispatch = jest.fn();
		jest.spyOn(useApphooks, 'useAppDispatch').mockReturnValue(mockDispatch);
		renderWithProviders(<Cart />, {
			preloadedState: {
				...initialPreloadedState,
				stores: {
					selectedStoreId: 1,
					stores: [
						{
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
						},
					],
					isLoading: false,
					error: null,
				},
				cart: {
					items: [
						{ id: 1, name: 'item1', price: 10, quantity: 1 },
						{ id: 2, name: 'item2', price: 20, quantity: 2 },
					],
				},
			},
		});

		const buttton = screen.getByText('送出訂單');
		await fireEvent.click(buttton);
		expect(mockDispatch).toHaveBeenCalledTimes(1);
	});
});
