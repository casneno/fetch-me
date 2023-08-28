const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema')

/* ------CART ITEMS------ */
const orderItemSchema = new Schema({
  qty: { type: Number, default: 1},
  item: itemSchema
}, {
  timestamps:true,
  toJSON: {virtuals: true}
});

orderItemSchema.virtual('extPrice').get(function(){
  //'this' keyword is bound to the lineItem document
  return this.qty * this.item.price;
});

/* --------ORDER--------- */
const orderSchema = new Schema({
  name: { type: String, required:true},
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  colaborators: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  orderItems: [orderItemSchema],
  isPaid: { type: Boolean, default: false}
}, {
  timestamps: true,
  toJSON: {virtuals: true}
});

orderSchema.virtual('orderTotal').get(function(){
  return this.orderItems.reduce((total, item)=> total + item.extPrice , 0)
});

orderSchema.virtual('orderQty').get(function(){
  return this.orderItems.reduce((total, item)=> total + item.qty , 0)
});

orderSchema.virtual('orderId').get(function(){
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getOrder = function(userId) {
  return this.findOneAndUpdate(
    //query object
    { user: userId, isPaid: false},
    // update doc - provides values when inserting
    { user: userId },
    // upsert option
    { upsert: true, new: true }
  );
};

// Instance method for adding an item to a order (unpaid order)
orderSchema.methods.addItemToOrder = async function (itemId) {
  // 'this' keyword is bound to the order (order doc)
  const order = this;
  // Check if the item already exists in the order
  const orderItem = order.orderItems.find(orderItem => orderItem.item._id.equals(itemId));
  if (orderItem) {
    // It already exists, so increase the qty
    orderItem.qty += 1;
  } else {
    // Get the item from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    const Item = mongoose.model('Item');
    const item = await Item.findById(itemId);
    // The qty of the new lineItem object being pushed in defaults to 1
    order.orderItems.push({ item });
  }
  // return the save() method's promise
  return order.save();
};

// Instance method to set an item's qty in the order (will add item if does not exist)
orderSchema.methods.setItemQty = function(itemId, newQty) {
  // this keyword is bound to the order (order doc)
  const order = this;
  // Find the line item in the order for the menu item
  const orderItem = order.orderItems.find(orderItem => orderItem.item._id.equals(itemId));
  if (orderItem && newQty <= 0) {
    // Calling deleteOne(), removes itself from the order.lineItems array
    // Note that video shows remove(), which has been removed 😀 in Mongoose v7
    orderItem.deleteOne();
  } else if (orderItem) {
    // Set the new qty - positive value is assured thanks to prev if
    orderItem.qty = newQty;
  }
  // return the save() method's promise
  return order.save();
};


module.exports = mongoose.model('Order', orderSchema);