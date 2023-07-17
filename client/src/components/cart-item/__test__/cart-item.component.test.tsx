import { renderWithProviders } from '../../../utils/test/test.util';
import { screen, fireEvent } from '@testing-library/react';
import { initialPreloadedState } from '../../../utils/test/test.util';

import CartItem from '../cart-item.component';

describe('cart-item component test !', () => {
	test('it should render correctly with prop cartItem', async () => {
		renderWithProviders(<CartItem cartItem={{ id: 1, name: 'item1', price: 10, quantity: 1 }} />);

		expect(screen.getByText('item1 $10')).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});

	test('it should increase cart item quantity when click increase button', async () => {
		const { store } = renderWithProviders(
			<CartItem cartItem={{ id: 1, name: 'item1', price: 10, quantity: 1 }} />,
			{
				preloadedState: {
					...initialPreloadedState,
					cart: { items: [{ id: 1, name: 'item1', price: 10, quantity: 1 }] },
				},
			}
		);

		const increaseButton = screen.getByLabelText('increase');

		await fireEvent.click(increaseButton);
		expect(store.getState().cart.items[0].quantity).toBe(2);

		await fireEvent.click(increaseButton);
		expect(store.getState().cart.items[0].quantity).toBe(3);
	});

	test('it should decrease cart item quantity when click decrease button', async () => {
		const { store } = renderWithProviders(
			<CartItem cartItem={{ id: 1, name: 'item1', price: 10, quantity: 5 }} />,
			{
				preloadedState: {
					...initialPreloadedState,
					cart: { items: [{ id: 1, name: 'item1', price: 10, quantity: 5 }] },
				},
			}
		);

		const decreaseButton = screen.getByLabelText('decrease');

		await fireEvent.click(decreaseButton);
		expect(store.getState().cart.items[0].quantity).toBe(4);

		await fireEvent.click(decreaseButton);
		expect(store.getState().cart.items[0].quantity).toBe(3);
	});

	test('it should remove item from cart when click remove button', async () => {
		const { store } = renderWithProviders(
			<CartItem cartItem={{ id: 1, name: 'item1', price: 10, quantity: 5 }} />,
			{
				preloadedState: {
					...initialPreloadedState,
					cart: {
						items: [
							{ id: 1, name: 'item1', price: 10, quantity: 5 },
							{ id: 2, name: 'item2', price: 20, quantity: 10 },
						],
					},
				},
			}
		);

		const decreaseButton = screen.getByLabelText('remove');

		await fireEvent.click(decreaseButton);
		expect(store.getState().cart.items).toEqual([
			{ id: 2, name: 'item2', price: 20, quantity: 10 },
		]);
	});
});
