const Order = require('../../models/order');
const User = require('../../models/user');

module.exports={
  getUserOrders,
  getOrder,
  createNewOrder,
  deleteOrder,
  addColab,
  removeColab,
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
    const newOrder = await Order.create(req.body)
    res.status(200).json(newOrder)
  } catch {
    console.error ('Unable to create order')
  }
}

async function deleteOrder(req, res){
  try{
    console.log(req.params.id)
    await Order.findByIdAndDelete(req.params.id)
    res.json({message: 'Order Deleted successfully'})
  } catch (error) {
    res.status(500).json({ message: 'Order could not be deleted' })
  }
}


async function getOrder(req, res){
  try{
    const order = await Order.findById(req.params.id).populate('colaborators')
    res.json(order)
  } catch {
    console.error ('')
  }
}
/* OK - adds target colaborator to target order, returns populated order object */
async function addColab(req, res){
  try{
    const colab = await User.findById(req.body.colabId)
    const order = await Order.findById(req.body.orderId)
    if (!order.colaborators.includes(colab._id)) {
      order.colaborators.push(colab);
      await order.save();
    }
    const popOrder = await Order.findById(req.body.orderId).populate('colaborators')
    res.status(200).json(popOrder)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to add colaborator to order' });
  }
}
/* OK - removes target coalborator from target order, returns populated order object */
async function removeColab(req, res){
  try{
    const order = await Order.findById(req.body.orderId)
    const colab = await User.findById(req.body.colabId)
    order.colaborators.splice(order.colaborators.indexOf(colab.id), 1)
    await order.save()
    const popOrder = await Order.findById(req.body.orderId).populate('colaborators')
    res.status(200).json(popOrder)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to remove colaborator to order' });
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