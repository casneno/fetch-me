const Order = require('../../models/order');
const User = require('../../models/user');
const Item = require('../../models/item');

module.exports={
  getUserOrders,
  getOrder,
  createNewOrder,
  addColab,
  addItemToOrder,
  setItemQuantity
}

/* OK */
async function getUserOrders(req, res){
  try{
    const userId = req.params.id
    const userOrders = await Order.find({ owner:userId })
    const userColabs = await Order.find({ colaborators: {$in: [userId] }})
    const allUserOrders = [...userOrders, ...userColabs]
    res.status(200).json(allUserOrders)
  } catch (error) {
    res.status(400).json(error)
  }
}

/* OK */
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
    const order = await Order.findById(req.params.id)
    res.json(order)
  } catch {
    console.error ('')
  }
}

async function addColab(req, res){
  try{
    const colab = await User.findById(req.body.colabId)
    const order = await Order.findById(req.body.orderId)
    const updatedOrder = order.colaborators.push(colab)
    console.log(updatedOrder)
    res.status(200).json(updatedOrder)
  } catch (err) {
    console.error(err)
  }
}
/* OK */
async function addItemToOrder(req, res){
  try{
    const order = await Order.findById(req.body.orderId)
    await order.addItemToOrder(req.body.itemId)
    res.status(200).json(order)
  } catch {
    console.error ('Could not add item to order')
  }
}
/* OK */
async function setItemQuantity(req, res) {
  const order = await Order.findById(req.body.orderId);
  await order.setItemQtyInCart(req.body.itemId, req.body.newQty)
  res.json(order);
}