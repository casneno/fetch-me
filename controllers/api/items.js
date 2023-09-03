const Item = require('../../models/item')

module.exports = {
  getAllItems
}

async function getAllItems(req, res) {
  const items = await Item.find({}).sort('name').populate('category').exec();
  console.log(items)
  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(items);
}
