import { useAppSelector } from '../../store/hooks';
import { selectStoreById } from '../../store/stores/stores.select';

import { Box, Paper, Typography } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';

import MenuCategory from '../menu-category/menu-category.component';

const Menu = () => {
	const selectedStore = useAppSelector(selectStoreById);
	return (
		<Box sx={{ flex: 1 }}>
			{selectedStore ? (
				<Paper
					sx={{
						padding: '20px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '15px',
							marginBottom: '20px',
							flexWrap: 'wrap',
						}}
					>
						<Typography variant="h4" fontWeight="600">
							{selectedStore.name}
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
							<CampaignIcon />
							<Typography variant="body1">{selectedStore.description}</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '10px',
						}}
					>
						{selectedStore.categories.map(category => {
							return (
								<MenuCategory
									key={category.key}
									category={category}
									categoryItems={selectedStore.menu[category.key]}
								/>
							);
						})}
					</Box>
				</Paper>
			) : (
				<Paper sx={{ padding: '20px' }}>
					<Typography variant="h5" fontWeight={800} fontStyle={'italic'}>
						請選擇店家
					</Typography>
				</Paper>
			)}
		</Box>
	);
};

export default Menu;
