import { renderWithProviders } from '../../../utils/test/test.util';
import { screen, fireEvent } from '@testing-library/react';
import { initialPreloadedState } from '../../../utils/test/test.util';

import Header from '../header.component';

describe('header component test !', () => {
	test('it should show cart items count on cart icon button', () => {
		renderWithProviders(<Header />, {
			preloadedState: {
				...initialPreloadedState,
				cart: {
					items: [
						{ id: 1, name: 'item1', price: 10, quantity: 3 },
						{ id: 2, name: 'item2', price: 20, quantity: 5 },
					],
				},
			},
		});

		expect(screen.getByText('8')).toBeInTheDocument();
	});

	test('it should show render History component when click history button', async () => {
		renderWithProviders(<Header />);

		const historyButton = screen.getByLabelText('history button');
		await fireEvent.click(historyButton);

		expect(screen.getByTestId('history')).toBeInTheDocument();
	});

	test('it should show render Cart component when click cart button', async () => {
		renderWithProviders(<Header />);

		const cartButton = screen.getByLabelText('cart button');
		await fireEvent.click(cartButton);

		expect(screen.getByTestId('cart')).toBeInTheDocument();
	});
});
