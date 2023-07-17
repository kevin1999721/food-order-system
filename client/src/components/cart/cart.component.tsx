import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
	selectCartItems,
	selectCartItmesCount,
	selectCartItmesTotal,
} from '../../store/cart/cart.select';
import { selectStoreById } from '../../store/stores/stores.select';
import { thunkPostOrderList } from '../../store/order-lists/order-lists.slice';

import { Box, Typography, Divider, Button } from '@mui/material';

import CartItem from '../cart-item/cart-item.component';

const Cart = () => {
	const disaptch = useAppDispatch();
	const store = useAppSelector(selectStoreById);
	const cartItems = useAppSelector(selectCartItems);
	const cartItemsCount = useAppSelector(selectCartItmesCount);
	const cartItemsTotal = useAppSelector(selectCartItmesTotal);

	const onSubmitButtonClick = () => {
		if (store && cartItemsCount > 0 && cartItemsTotal > 0) {
			disaptch(
				thunkPostOrderList({
					store: {
						id: store.id,
						name: store.name,
					},
					products: cartItems,
					count: cartItemsCount,
					total: cartItemsTotal,
				})
			);
		}
	};

	return (
		<Box
			data-testid="cart"
			sx={{ maxWidth: '100%', minWidth: '300px', width: '380px', padding: '20px 10px' }}
		>
			<Box sx={{ height: '250px', overflow: 'auto' }}>
				{cartItems.length > 0 ? (
					cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
				) : (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '100%',
						}}
					>
						<Typography fontWeight={600} fontStyle={'italic'} color={'GrayText'}>
							尚無商品
						</Typography>
					</Box>
				)}
			</Box>
			<Divider />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					gap: '20px',
					marginTop: '10px',
					'& > p': { fontSize: '20px', fontWeight: '600' },
				}}
			>
				<Typography>{`總數量 ${cartItemsCount}`}</Typography>
				<Typography>{`總金額 $${cartItemsTotal}`}</Typography>
			</Box>
			<Button
				onClick={onSubmitButtonClick}
				disabled={cartItemsTotal <= 0}
				variant="outlined"
				sx={{ width: '100%', marginTop: '20px' }}
			>
				送出訂單
			</Button>
		</Box>
	);
};

export default Cart;
