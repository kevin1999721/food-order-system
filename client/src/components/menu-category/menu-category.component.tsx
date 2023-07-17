import { FC } from 'react';
import { Category, CategoryItem } from '../../store/stores/stores.slice';

import { Box, Typography, Divider } from '@mui/material';

import MenuCategoryItem from '../menu-category-item/menu-category-item.component';

type MenuCategoryProps = {
	category: Category;
	categoryItems: CategoryItem[];
};

const MenuCategory: FC<MenuCategoryProps> = ({ category, categoryItems }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
			<Typography variant="h6" fontWeight="600">
				{category.description}
			</Typography>
			<Divider />
			<Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '5px' }}>
				{categoryItems.map(item => (
					<MenuCategoryItem key={item.id} categoryItem={item} />
				))}
			</Box>
		</Box>
	);
};

export default MenuCategory;
