require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Bakery', sortOrder: 10},
    {name: 'Beverages', sortOrder: 20},
    {name: 'Canned Goods', sortOrder: 30},
    {name: 'Condiments & Spices', sortOrder: 40},
    {name: 'Fish & Sea', sortOrder: 50},
    {name: 'Frozen Food', sortOrder: 60},
    {name: 'Fruits', sortOrder: 70},
    {name: 'HealthCare', sortOrder: 80},
    {name: 'Meat', sortOrder: 90},
    {name: 'Pasta, Cereal and Rice', sortOrder: 100},
    {name: 'Personal Care', sortOrder: 110},
    {name: 'Snacks', sortOrder: 120},
    {name: 'Vegetables', sortOrder: 130},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Bread', emoji: 'http://bit.ly/3szVtLH', category: categories[0], price: 0.95},
    {name: 'Bagel', emoji: 'https://bit.ly/3R15Xhm', category: categories[0], price: 1.95},
    {name: 'Cookies', emoji: 'https://rb.gy/4kt5w', category: categories[0], price: 0.45},
    {name: 'Muffins', emoji: 'https://rb.gy/i02sk', category: categories[0], price: 1.05},
    {name: 'Water', emoji: 'https://rb.gy/oqp6j', category: categories[1], price: 0.50},
    {name: 'Coca-cola', emoji: 'https://rb.gy/4v3vv', category: categories[1], price: 2.00},
    {name: 'Milk', emoji: 'https://rb.gy/qm27g', category: categories[1], price: 2.05},
    {name: 'Orange Juice', emoji: 'https://shorturl.at/jrDL0', category: categories[1], price: 3.00},
    {name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95},
    {name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95},
    {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95},
    {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95},
    {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95},
    {name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95},
    {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
    {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
    {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
    {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
    {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
    {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
    {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
    {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();
