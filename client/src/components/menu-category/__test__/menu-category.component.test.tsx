import { renderWithProviders } from '../../../utils/test/test.util';
import { screen } from '@testing-library/react';

import MenuCategory from '../menu-category.component';

describe('menu-category component test !', () => {
	test('it should render correctly with prop category', () => {
		renderWithProviders(
			<MenuCategory
				category={{ key: 'category key', description: 'category desc' }}
				categoryItems={[]}
			/>
		);

		expect(screen.getByText('category desc')).toBeInTheDocument();
	});
});
