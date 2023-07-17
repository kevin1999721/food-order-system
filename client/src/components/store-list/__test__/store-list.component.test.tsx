import { render, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.util';
import * as useApphooks from '../../../store/hooks';
import { thunkFetchStores } from '../../../store/stores/stores.slice';

import StoreList from '../store-list.component';

describe('StoreList component test', () => {
	test('dispatch should be called once', () => {
		const mockDispatch = jest.fn();
		jest.spyOn(useApphooks, 'useAppDispatch').mockReturnValue(mockDispatch);
		renderWithProviders(<StoreList />);

		expect(mockDispatch).toHaveBeenCalledTimes(1);
		// expect(mockDispatch).toHaveBeenCalledWith(expect.any(thunkFetchStores()));
	});
});
