import { CartItem } from '../../store/cart/cart.slice';
import { Store } from '../../store/stores/stores.slice';
import { OrderList } from '../../store/order-lists/order-lists.slice';

export type OrderListToPost = {
	store: {
		id: number;
		name: string;
	};
	products: CartItem[];
	count: number;
	total: number;
};

export const fetchStores = async () => {
	const response = await fetch('http://localhost:3000/stores');

	if (response.status === 200) {
		const stores = await response.json();
		return stores;
	} else {
		return new Error('something wrong');
	}
};

export const postOrderList = async (orderListToPost: OrderListToPost) => {
	const response = await fetch('http://localhost:3000/orderLists', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(orderListToPost),
	});

	if (response.status === 201) {
		const stores = await response.json();
		return stores;
	} else {
		return new Error('something wrong');
	}
};

export const deleteOrderListById = async (orderListId: number) => {
	const response = await fetch(`http://localhost:3000/orderLists/${orderListId}`, {
		method: 'delete',
	});

	if (response.status === 200) {
		const stores = await response.json();
		return stores;
	} else {
		return new Error('something wrong');
	}
};
