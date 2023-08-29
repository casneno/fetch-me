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
    //console.log(req.user)
    const userOrders = await Order.find({ owner:userId })
    console.log('orders',userOrders)
    const userColabs = await Order.find({ colaborators: {$in: [userId] }})
    //console.log('colabs',userColabs)
    const allUserOrders = [...userOrders, ...userColabs]
    res.status(200).json(allUserOrders)
  } catch (error) {
    res.status(400).json(error)
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
    await order.addItemToOrder(req.body.itemId)
    res.status(200).json(order)
  } catch {
    console.error ('Could not add item to order')
  }
}