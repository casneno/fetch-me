const Order = require('../../models/order');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports={
  getAllOrders,
  getOneOrder,
  createNewOrder,
  updateOrder
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

async function getOneOrder(req, res){
  try{

  } catch {
    console.error ('')
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

async function updateOrder(req, res){
  try{

  } catch {
    console.error ('')
  }
}