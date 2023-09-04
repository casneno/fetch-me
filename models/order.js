const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema')

/* ----------------------ORDER ITEMS----------------- */

const orderItemSchema = new Schema({
  qty: { type: Number, default: 1},
  item: itemSchema
}, {
  timestamps:true,
  toJSON: {virtuals: true}
});

orderItemSchema.virtual('extPrice').get(function(){
  return this.qty * this.item.price;
});

/* ---------------------ORDER------------------------ */

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

// Instance method for adding an item to a order (unpaid order)
orderSchema.methods.addItemToOrder = async function (itemId) {
  const order = this;
  const orderItem = order.orderItems.find(orderItem => orderItem.item._id.equals(itemId));
  if (orderItem) {
    orderItem.qty += 1;
  } else {
    const Item = mongoose.model('Item');
    const item = await Item.findById(itemId);
    order.orderItems.push({ item });
  }
  return order.save();
};

// Instance method to set an item's qty in the order
orderSchema.methods.setItemQtyInCart = function(itemId, newQty) {
  const orderItem = this.orderItems.find(orderItem => orderItem.id === (itemId));
  if (newQty <= 0) {
    orderItem.deleteOne();
  } else if (orderItem) {
    orderItem.qty = newQty;
  }
  return this.save();
};

module.exports = mongoose.model('Order', orderSchema);

//Future impementation:
orderSchema.methods.confirmIfPaid = function(isPaid) {
  this.isPaid = true
  return this.save()
}

