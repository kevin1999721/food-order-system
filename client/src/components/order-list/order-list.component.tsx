import { FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { OrderList as OrderListType } from '../../store/order-lists/order-lists.slice';
import { thunkDeleteOrderListById } from '../../store/order-lists/order-lists.slice';

import { Box, Typography, Divider, Paper, Button } from '@mui/material';

import OrderListItem from '../order-list-item/order-list-item.component';

type OrderListProps = {
	orderList: OrderListType;
};

const OrderList: FC<OrderListProps> = ({ orderList }) => {
	const dispatch = useAppDispatch();
	const { id, store, products, count, total, createAt } = orderList;

	const onDeleteHistoryButtonClick = () => {
		dispatch(thunkDeleteOrderListById(id));
	};

	return (
		<Paper
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
				padding: '10px',
				boxShadow: '4',
			}}
		>
			<Box>
				<Typography variant="h6" fontWeight={600}>
					{store.name}
				</Typography>
				<Typography variant="body2">{`訂單編號 #${id}`}</Typography>
				<Typography variant="body2">{`時間 ${new Date(createAt).toLocaleString()}`}</Typography>
			</Box>
			<Divider />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '5px',
					maxHeight: '200px',
					overflow: 'auto',
				}}
			>
				{products.map(product => (
					<OrderListItem key={product.id} product={product} />
				))}
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					gap: '20px',
					marginTop: '10px',
					'& > p': { fontSize: '18px', fontWeight: '600' },
				}}
			>
				<Typography>{`總數量 ${count}`}</Typography>
				<Typography>{`總金額 $${total}`}</Typography>
			</Box>
			<Box>
				<Button variant="outlined" sx={{ width: '100%' }} onClick={onDeleteHistoryButtonClick}>
					刪除
				</Button>
			</Box>
		</Paper>
	);
};

export default OrderList;
