const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true },
  quantity: { type: Number, default:0 },
  details: String
}, {
  timestamps: true
});

module.exports = itemSchema;
