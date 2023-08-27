const Order = require('../../models/order');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports={
  getAllOrders,
  getOneOrder,
  addNewOrder,
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

async function addNewOrder(req, res){
  try{
    const newOrder = await Order.create(req.body)

  } catch {
    console.error ('')
  }
}

async function updateOrder(req, res){
  try{

  } catch {
    console.error ('')
  }
}