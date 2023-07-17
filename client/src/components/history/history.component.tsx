import { useAppSelector } from '../../store/hooks';
import { selectOrderLists } from '../../store/order-lists/order-lists.select';

import { Box, Typography } from '@mui/material';

import OrderList from '../order-list/order-list.component';

const History = () => {
	const orderLists = useAppSelector(selectOrderLists);

	return (
		<Box
			data-testid="history"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '30px',
				maxWidth: '100%',
				minWidth: '300px',
				width: '350px',
				padding: '20px',
			}}
		>
			{orderLists.length > 0 ? (
				[...orderLists]
					.sort((a, b) => b.id - a.id)
					.map(orderList => {
						return <OrderList key={orderList.id} orderList={orderList} />;
					})
			) : (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '300px',
					}}
				>
					<Typography fontWeight={600} fontStyle={'italic'} color={'GrayText'}>
						尚無歷史訂單
					</Typography>
				</Box>
			)}
		</Box>
	);
};

export default History;
