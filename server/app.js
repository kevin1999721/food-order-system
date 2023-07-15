const mockTables = require('./mock-tables');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors(), express.json());

function MockDatabase() {
	this.tables = {
		stores: mockTables.stores,
		orderLists: [],
	};

	this.isnertListIntoOrderLists = function (newOrderListItme) {
		this.tables.orderLists.push(newOrderListItme);
	};

	this.deleteListFromOrderLists = function (deleteId) {
		const { orderLists } = this.tables;
		this.tables.orderLists = orderLists.filter(orderList => orderList.id !== deleteId);
	};
}

const mockDatabase = new MockDatabase();

app.get('/stores', (req, res) => {
	try {
		res.send(mockDatabase.tables.stores);
	} catch (error) {
		res.status(500).send('Internal Server Error');
	}
});

app.get('/orderLists', (req, res) => {
	try {
		res.send(mockDatabase.tables.orderLists);
	} catch (error) {
		res.status(500).send('Internal Server Error');
	}
});

app.post('/orderLists', (req, res) => {
	try {
		const item = req.body;
		if (item) {
			mockDatabase.isnertListIntoOrderLists(item);
			res.status(201).send(mockDatabase.tables.orderLists);
		} else {
			res.status(400).send('Please check body format');
		}
	} catch (error) {
		res.status(500).send('Internal Server Error');
	}
});

app.delete('/orderLists/:id', (req, res) => {
	try {
		const id = parseInt(req.params.id);
		if (id || id === 0) {
			mockDatabase.deleteListFromOrderLists(id);
			res.send(mockDatabase.tables.orderLists);
		} else {
			res.status(400).send('Please check id');
		}
	} catch (error) {
		res.status(500).send('Internal Server Error');
	}
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
