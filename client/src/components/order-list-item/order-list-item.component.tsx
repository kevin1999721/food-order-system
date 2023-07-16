import { FC } from 'react';
import { Product } from '../../store/order-lists/order-lists.slice';

import { Box, Typography } from '@mui/material';

type OrderListItemProps = {
	product: Product;
};

const OrderListItem: FC<OrderListItemProps> = ({ product }) => {
	const { name, price, quantity } = product;
	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Typography fontWeight={600}>{`${name} $${price}`}</Typography>
			<Typography fontWeight={600}>{quantity}</Typography>
		</Box>
	);
};

export default OrderListItem;
