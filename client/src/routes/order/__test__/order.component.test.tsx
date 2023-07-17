import { renderWithProviders } from '../../../utils/test/test.util';
import { screen } from '@testing-library/react';
import * as useAppHooks from '../../../store/hooks';
import mediaQuery from 'css-mediaquery';

import Order from '../order.component';

function createMatchMedia(width: number) {
	return (query: string) => ({
		matches: mediaQuery.match(query, {
			width,
		}),
		addListener: () => {},
		removeListener: () => {},
		media: '',
		onchange: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => true,
	});
}

describe('order component test !', () => {
	beforeAll(() => {
		window.matchMedia = createMatchMedia(600);
	});

	test('container style should be set "flexDireciton:column" when media query is matched', () => {
		const mockDispatch = jest.fn();
		jest.spyOn(useAppHooks, 'useAppDispatch').mockReturnValue(mockDispatch);

		renderWithProviders(<Order />);

		expect(screen.getByTestId('order')).toHaveStyle({ 'flex-direction': 'column' });
	});
});
