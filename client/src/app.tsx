import Header from './components/header/header.component';
import Order from './routes/order/order.component';
import { Box } from '@mui/material';

const App = () => {
	return (
		<Box sx={{ maxWidth: '1400px', margin: 'auto' }}>
			<Header />
			<Order />
		</Box>
	);
};

export default App;
