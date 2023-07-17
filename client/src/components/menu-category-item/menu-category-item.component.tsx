import { FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { CategoryItem } from '../../store/stores/stores.slice';
import { addItemToCart } from '../../store/cart/cart.slice';

import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type MenuCategoryItemProps = {
	categoryItem: CategoryItem;
};

const MenuCategoryItem: FC<MenuCategoryItemProps> = ({ categoryItem }) => {
	const dispatch = useAppDispatch();
	const { name, price } = categoryItem;

	const onAddButtonClick = () => {
		dispatch(addItemToCart(categoryItem));
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '10px',
				padding: '5px 10px',
				border: '1px solid rgba(0,0,0,0.4)',
				borderRadius: '5px',
			}}
		>
			<Typography fontWeight={600}>{`${name} $${price}`}</Typography>
			<IconButton onClick={onAddButtonClick}>
				<AddIcon />
			</IconButton>
		</Box>
	);
};

export default MenuCategoryItem;
