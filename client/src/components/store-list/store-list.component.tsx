import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectStores } from '../../store/stores/stores.select';
import { thunkFetchStores } from '../../store/stores/stores.slice';

import { List, Paper } from '@mui/material';

import StoreListItem from '../store-list-item/store-list-item.component';

const StoreList = () => {
	const dispatch = useAppDispatch();
	const stores = useAppSelector(selectStores);

	useEffect(() => {
		dispatch(thunkFetchStores());
	}, []);

	return (
		<Paper>
			<List sx={{ display: 'flex', flexDirection: 'column' }}>
				{stores.map(store => (
					<StoreListItem key={store.id} store={store} />
				))}
			</List>
		</Paper>
	);
};

export default StoreList;
