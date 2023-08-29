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

module.exports = mongoose.model('OrderItem', orderItemSchema);