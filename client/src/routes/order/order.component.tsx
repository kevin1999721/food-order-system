import useMediaQuery from '@mui/material/useMediaQuery';

import { Box } from '@mui/material';

import Menu from '../../components/menu/menu.component';
import StoreList from '../../components/store-list/store-list.component';

const Order = () => {
	const isMatcheMediaQuery = useMediaQuery('(max-width:800px)');

	return (
		<Box
			data-testid="order"
			sx={{
				display: 'flex',
				gap: '20px',
				margin: '0px 10px',
				...(isMatcheMediaQuery && { flexDirection: 'column' }),
			}}
		>
			<StoreList />
			<Menu />
		</Box>
	);
};

export default Order;
