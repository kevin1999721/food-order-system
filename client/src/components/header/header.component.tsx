import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectCartItmesCount } from '../../store/cart/cart.select';

import { Box, Dialog, IconButton, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

import Cart from '../cart/cart.component';
import History from '../history/history.component';

const popupComponents = [Cart, History];

const Header = () => {
	const cartItemsCount = useAppSelector(selectCartItmesCount);
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
	const [popupComponentIndex, setPopupComponentIndex] = useState<number>(0);
	const PopupComponent = popupComponents[popupComponentIndex];

	const handleDialogClose = () => {
		setIsDialogOpen(false);
	};

	const onCartButtonClick = () => {
		setIsDialogOpen(true);
		setPopupComponentIndex(0);
	};

	const onHistoryButtonClick = () => {
		setIsDialogOpen(true);
		setPopupComponentIndex(1);
	};

	return (
		<Box component={'header'} sx={{ display: 'flex', alignItems: 'center', height: '75px' }}>
			<Box marginLeft={'auto'}>
				<IconButton aria-label="history button" onClick={onHistoryButtonClick}>
					<PlaylistAddCheckIcon />
				</IconButton>
				<IconButton
					aria-label="cart button"
					onClick={onCartButtonClick}
					sx={{ position: 'relative' }}
				>
					<ShoppingCartIcon />
					{cartItemsCount > 0 && (
						<Typography
							component={'span'}
							sx={{
								position: 'absolute',
								left: 0,
								top: 0,
								backgroundColor: 'GrayText',
								borderRadius: '50%',
								width: '20px',
								height: '20px',
								fontSize: '14px',
								lineHeight: '20px',
								fontWeight: '600',
								color: 'white',
							}}
						>
							{cartItemsCount}
						</Typography>
					)}
				</IconButton>
				<Dialog open={isDialogOpen} onClose={handleDialogClose}>
					<PopupComponent />
				</Dialog>
			</Box>
		</Box>
	);
};

export default Header;
