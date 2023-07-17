import { FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { changeCartItemQuantityByID, removeItemFromCartById } from '../../store/cart/cart.slice';
import { CartItem as CartItemType } from '../../store/cart/cart.slice';

import { Box, IconButton, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type CartItemProps = {
	cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	const dispathch = useAppDispatch();
	const { id, name, price, quantity } = cartItem;

	const onRemoveButtonClick = () => {
		dispathch(removeItemFromCartById(id));
	};

	const onIncreaseButtonClick = () => {
		if (quantity < 100) dispathch(changeCartItemQuantityByID({ id, changeQuantity: 1 }));
	};

	const onDecreaseButtonClick = () => {
		if (quantity > 1) dispathch(changeCartItemQuantityByID({ id, changeQuantity: -1 }));
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '10px',
			}}
		>
			<Box>
				<IconButton aria-label="remove" onClick={onRemoveButtonClick}>
					<CloseIcon />
				</IconButton>
			</Box>
			<Box>
				<Typography fontWeight={600}>{`${name} $${price}`}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '5px',
					marginLeft: 'auto',
				}}
			>
				<IconButton aria-label="decrease" onClick={onDecreaseButtonClick}>
					<RemoveIcon />
				</IconButton>
				<Typography fontWeight={600} width={'20px'} textAlign={'center'}>
					{quantity}
				</Typography>
				<IconButton aria-label="increase" onClick={onIncreaseButtonClick}>
					<AddIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default CartItem;
