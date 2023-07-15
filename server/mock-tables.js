exports.stores = [
	{
		id: 1,
		name: '活力早餐店',
		description: '一日之計在於晨，快來吃營養又美味的早餐吧 ~',
		location: '台北市信義區中正路1號',
		phone: '0900123123',
		categories: [
			{ key: 'eggCake', description: '蛋餅' },
			{ key: 'sandwich', description: '三明治' },
			{ key: 'drink', description: '飲料' },
		],
		menu: {
			eggCake: [
				{
					id: 1,
					name: '原味蛋餅',
					price: 30,
				},
				{
					id: 2,
					name: '玉米蛋餅',
					price: 35,
				},
				{
					id: 3,
					name: '火腿蛋餅',
					price: 35,
				},
				{
					id: 4,
					name: '培根蛋餅',
					price: 40,
				},
				{
					id: 5,
					name: '薯餅蛋餅',
					price: 40,
				},
			],
			sandwich: [
				{
					id: 6,
					name: '火腿三明治',
					price: 40,
				},
				{
					id: 7,
					name: '培根三明治',
					price: 45,
				},
				{
					id: 8,
					name: '薯餅三明治',
					price: 45,
				},
				{
					id: 9,
					name: '香雞三明治',
					price: 50,
				},
				{
					id: 10,
					name: '豬排三明治',
					price: 55,
				},
			],
			drink: [
				{
					id: 11,
					name: '紅茶',
					price: 15,
				},
				{
					id: 12,
					name: '奶茶',
					price: 20,
				},
				{
					id: 13,
					name: '豆漿',
					price: 20,
				},
			],
		},
	},
	{
		id: 2,
		name: '家鄉滷肉飯',
		description: '家鄉滷肉飯，讓你想起家鄉的好味道 ~',
		location: '台北市中山區和平路2號',
		phone: '0900456456',
		categories: [
			{ key: 'rice', description: '飯' },
			{ key: 'noodles', description: '麵' },
			{ key: 'soup', description: '湯' },
		],
		menu: {
			rice: [
				{
					id: 1,
					name: '滷肉飯',
					price: 30,
				},
				{
					id: 2,
					name: '雞肉飯',
					price: 35,
				},
				{
					id: 3,
					name: '排骨飯',
					price: 75,
				},
				{
					id: 4,
					name: '爌肉飯',
					price: 80,
				},
				{
					id: 5,
					name: '雞滷飯',
					price: 40,
				},
			],
			noodles: [
				{
					id: 6,
					name: '肉燥乾麵',
					price: 35,
				},
				{
					id: 7,
					name: '炸醬麵',
					price: 40,
				},
				{
					id: 8,
					name: '麻醬麵',
					price: 40,
				},
				{
					id: 9,
					name: '陽春麵',
					price: 30,
				},
				{
					id: 10,
					name: '牛肉麵',
					price: 100,
				},
			],
			soup: [
				{
					id: 11,
					name: '貢丸湯',
					price: 30,
				},
				{
					id: 12,
					name: '魚丸湯',
					price: 30,
				},
				{
					id: 13,
					name: '豬血湯',
					price: 35,
				},
			],
		},
	},
];
