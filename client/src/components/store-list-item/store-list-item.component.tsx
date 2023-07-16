import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSelectedStoreId } from '../../store/stores/stores.slice';
import { selectSelectedStoreId } from '../../store/stores/stores.select';
import { resetCartItems } from '../../store/cart/cart.slice';
import { Store } from '../../store/stores/stores.slice';

import { Box, ListItem, ListItemIcon, ListItemButton, Typography } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type StoreListItemProps = {
	store: Store;
};

const StoreListItem: FC<StoreListItemProps> = ({ store }) => {
	const dispatch = useAppDispatch();
	const selectedStoreId = useAppSelector(selectSelectedStoreId);
	const { name, location, id } = store;

	const onStoreButtonClick = () => {
		dispatch(setSelectedStoreId(id));

		if (selectedStoreId !== id) {
			dispatch(resetCartItems());
		}
	};

	return (
		<ListItem sx={{ minWidth: '300px' }}>
			<ListItemButton sx={{ borderRadius: '10px' }} onClick={onStoreButtonClick}>
				<ListItemIcon>
					<RestaurantIcon />
				</ListItemIcon>
				<Box>
					<Typography marginBottom={'5px'} fontWeight={600}>
						{name}
					</Typography>
					<Typography
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						variant="body2"
					>
						<LocationOnIcon fontSize="small" />
						<span>{location}</span>
					</Typography>
				</Box>
			</ListItemButton>
		</ListItem>
	);
};

export default StoreListItem;
