const Order = require('../../models/order');
const Item = require('../../models/item');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { OrderedBulkOperation } = require('mongodb');

module.exports={
  getAllOrders,
  getOrder,
  createNewOrder,
  addItemToOrder
}

async function getAllOrders(req, res){
  try{
    const userId = req.user._id
    const orders = await Order.find({$or: [{owner:userId}, {colaborators: {$in: [userId]}}]})
    res.status(200).json(orders)
  } catch {
    console.error ('')
    res.status(500).json({message: "error: Couldn't get all ofthe user's orders"})
  }
}


async function createNewOrder(req, res){
  try{
    console.log(req.body)
    const newOrder = await Order.create(req.body)
    res.status(200).json(newOrder)
  } catch {
    console.error ('Unable to create order')
  }
}

async function getOrder(req, res){
  try{
    console.log('req.orderId:', req.params.id)
    const order = await Order.findById(req.params.id)
    res.json(order)
  } catch {
    console.error ('')
  }
}

async function addItemToOrder(req, res){
  try{
    const order = await Order.findById(req.body.orderId)
    const item = await Item.findById(req.body.itemId)
    order.orderItems.push(item)
    order.save()
    res.status(200).json(order)
  } catch {
    console.error ('Could not add item to order')
  }
}