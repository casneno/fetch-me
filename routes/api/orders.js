const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders'); //does not exist yet!
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ordersCtrl.getAllOrders)

router.post('/', ordersCtrl.createNewOrder)

router.get('/:id', ordersCtrl.getOrder)

router.put('/:id', ordersCtrl.updateOrder)

router.get('/categories', )

module.exports = router