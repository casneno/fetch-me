const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders'); //does not exist yet!
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ordersCtrl.getAllOrders)

router.get('/:id', ordersCtrl.getOneOrder)

router.post('/:id', ordersCtrl.addNewOrder)

router.put('/:id', ordersCtrl.updateOrder)

module.exports = router