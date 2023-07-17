import { renderWithProviders } from '../../../utils/test/test.util';
import { screen, fireEvent } from '@testing-library/react';
import { initialPreloadedState } from '../../../utils/test/test.util';

import MenuCategoryItem from '../menu-category-item.component';

describe('menu-category-item component test !', () => {
	test('it should render correctly with prop categoryItem', () => {
		renderWithProviders(<MenuCategoryItem categoryItem={{ id: 1, name: 'item1', price: 10 }} />);

		expect(screen.getByText('item1 $10')).toBeInTheDocument();
	});

	test('it should dispatch addItemToCart when button click', async () => {
		const { store } = renderWithProviders(
			<MenuCategoryItem categoryItem={{ id: 1, name: 'item1', price: 10 }} />
		);

		const button = screen.getByRole('button');
		expect(store.getState().cart.items).toEqual([]);
		await fireEvent.click(button);
		expect(store.getState().cart.items).toEqual([{ id: 1, name: 'item1', price: 10, quantity: 1 }]);
		await fireEvent.click(button);
		expect(store.getState().cart.items).toEqual([{ id: 1, name: 'item1', price: 10, quantity: 2 }]);
	});
});
