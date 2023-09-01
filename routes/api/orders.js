const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders'); //does not exist yet!
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/user/:id', ordersCtrl.getUserOrders)

router.post('/', ordersCtrl.createNewOrder)

router.delete('/:id', ordersCtrl.deleteOrder)

router.get('/:id', ordersCtrl.getOrder)

router.put('/:id/addcolab', ordersCtrl.addColab)

router.put('/:id/rmcolab', ordersCtrl.removeColab)

router.put('/:id', ordersCtrl.addItemToOrder)

router.get('/categories', )

router.put('/order/qty', ordersCtrl.setItemQuantity);

module.exports = router