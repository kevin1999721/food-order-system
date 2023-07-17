import { renderWithProviders } from '../../../utils/test/test.util';
import { screen } from '@testing-library/react';

import OrderListItem from '../order-list-item.component';

describe('order-list-item component test !', () => {
	test('it should render correctly with prop product', () => {
		renderWithProviders(
			<OrderListItem product={{ id: 1, name: 'prodct1', price: 10, quantity: 3 }} />
		);

		expect(screen.getByText('prodct1 $10')).toBeInTheDocument();
		expect(screen.getByText('3')).toBeInTheDocument();
	});
});
