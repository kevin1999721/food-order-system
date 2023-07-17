import { renderWithProviders } from '../../../utils/test/test.util';
import { screen, fireEvent } from '@testing-library/react';
import * as useAppHooks from '../../../store/hooks';

import OrderList from '../order-list.component';

describe('order-list component test !', () => {
	test('it should render correctly with prop orderList', () => {
		renderWithProviders(
			<OrderList
				orderList={{
					id: 1,
					store: { id: 1, name: 'store1' },
					products: [{ id: 1, name: 'product1', price: 10, quantity: 1 }],
					count: 1,
					total: 10,
					createAt: '2023-07-17T09:06:29.847Z',
				}}
			/>
		);

		expect(screen.getByText('store1')).toBeInTheDocument();
		expect(screen.getByText('訂單編號 #1')).toBeInTheDocument();
		expect(
			screen.getByText(`時間 ${new Date('2023-07-17T09:06:29.847Z').toLocaleString()}`)
		).toBeInTheDocument();
		expect(screen.getByText('總數量 1')).toBeInTheDocument();
		expect(screen.getByText('總金額 $10')).toBeInTheDocument();
	});

	test('it should dispatch once when click button', async () => {
		const mockDispath = jest.fn();
		jest.spyOn(useAppHooks, 'useAppDispatch').mockReturnValue(mockDispath);

		renderWithProviders(
			<OrderList
				orderList={{
					id: 1,
					store: { id: 1, name: 'store1' },
					products: [{ id: 1, name: 'product1', price: 10, quantity: 1 }],
					count: 1,
					total: 10,
					createAt: '2023-07-17T09:06:29.847Z',
				}}
			/>
		);

		const button = screen.getByText('刪除');
		await fireEvent.click(button);
		expect(mockDispath).toHaveBeenCalled();
	});
});
