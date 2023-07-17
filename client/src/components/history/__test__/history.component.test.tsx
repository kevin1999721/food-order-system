import { renderWithProviders } from '../../../utils/test/test.util';
import { screen } from '@testing-library/react';

import History from '../history.component';

describe('history component test !', () => {
	test('it should render notice if orderLists is empty', () => {
		renderWithProviders(<History />);

		expect(screen.getByText('尚無歷史訂單')).toBeInTheDocument();
	});
});
