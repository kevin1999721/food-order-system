import { renderWithProviders } from '../../../utils/test/test.util';
import { screen } from '@testing-library/react';
import { initialPreloadedState } from '../../../utils/test/test.util';

import Menu from '../menu.component';

describe(' menu component test !', () => {
	test('it shuold render correctly with selectedStore', () => {
		renderWithProviders(<Menu />, {
			preloadedState: {
				...initialPreloadedState,
				stores: {
					...initialPreloadedState.stores,
					selectedStoreId: 1,
					stores: [
						{
							id: 1,
							name: 'store name',
							description: 'store desc',
							location: 'location',
							phone: '12345',
							categories: [],
							menu: {},
						},
					],
				},
			},
		});

		expect(screen.getByText('store name')).toBeInTheDocument();
		expect(screen.getByText('store desc')).toBeInTheDocument();
	});

	test('it shuold render notice when selectedStore is null', () => {
		renderWithProviders(<Menu />);
		expect(screen.getByText('請選擇店家')).toBeInTheDocument();
	});
});
