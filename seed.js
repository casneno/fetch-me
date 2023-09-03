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
    {name: 'Fruits', sortOrder: 70},
    {name: 'Meat', sortOrder: 90},
    {name: 'Pasta, Cereal and Rice', sortOrder: 100},
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
    {name: 'Spinach', emoji: 'https://shorturl.at/sCPQW', category: categories[2], price: 1.95},
    {name: 'Peas', emoji: 'https://shorturl.at/gzCG6', category: categories[2], price: 1.95},
    {name: 'Garam Masala', emoji: 'https://shorturl.at/hipP9', category: categories[3], price: 5.95},
    {name: 'Salt', emoji: 'https://shorturl.at/eilNS', category: categories[3], price: 1.95},
    {name: 'Chilli Pepper', emoji: 'https://shorturl.at/kpUW7', category: categories[3], price: 1.95},
    {name: 'Shrimp', emoji: 'https://shorturl.at/TVYZ9', category: categories[4], price: 7.95},
    {name: 'Salmon', emoji: 'https://shorturl.at/acm12', category: categories[4], price: 3.95},
    {name: 'Octopus', emoji: 'https://shorturl.at/rFRS5', category: categories[4], price: 3.95},
    {name: 'Squid', emoji: 'https://shorturl.at/gsMT0', category: categories[4], price: 3.95},
    {name: 'Bananas', emoji: 'https://shorturl.at/alxG7', category: categories[5], price: 1.95},
    {name: 'Apple', emoji: 'https://shorturl.at/pIOU0', category: categories[5], price: 0.95},
    {name: 'Pineapple', emoji: 'https://shorturl.at/bdEHM', category: categories[5], price: 2.95},
    {name: 'Melon', emoji: 'https://shorturl.at/lUY03', category: categories[5], price: 3.95},
    {name: 'Dragon Fruit', emoji: 'https://shorturl.at/guFU7', category: categories[5], price: 2.95},
    {name: 'Papaya', emoji: 'https://shorturl.at/yAGJO', category: categories[5], price: 4.95},
    {name: 'Picanha', emoji: 'https://shorturl.at/gkrWZ', category: categories[6], price: 17.95},
    {name: 'Chicken Breast', emoji: 'https://shorturl.at/tCIOR', category: categories[6], price: 6.95},
    {name: 'Pork Loin', emoji: 'https://shorturl.at/knQUW', category: categories[7], price: 5.95},
    {name: 'Mutton', emoji: 'https://shorturl.at/rLPSZ', category: categories[7], price: 3.95},
    {name: 'Rice', emoji: 'https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-superJumbo.jpg', category: categories[8], price: 2.95},
    {name: 'Flour', emoji: 'https://bakeitwithlove.com/wp-content/uploads/2022/06/How-To-Make-Bread-Flour-sq.jpg', category: categories[8], price: 1.95},
    {name: 'Beans', emoji: 'https://shorturl.at/CLMTW', category: categories[8], price: 7.95},
    {name: 'Spaguetti', emoji: 'https://feelgoodfoodie.net/wp-content/uploads/2020/06/how-to-cook-pasta-6.jpg', category: categories[8], price: 7.95},
    {name: 'Gnocchi', emoji: 'https://www.allrecipes.com/thmb/jOPKFsr6fvXjxAaRXThxTL6UTv8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1070416-a1a6c982aaef4da3acfdda0ae7f3b87f.jpg', category: categories[8], price: 7.95},
    {name: 'Lettuce', emoji: 'https://trikaya.net/cdn/shop/products/LettuceLeafytabletop_1024x1024.jpg?v=1594756664', category: categories[9], price: 0.95},
    {name: 'Spring Onion', emoji: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/CSA-Red-Spring-Onions.jpg/640px-CSA-Red-Spring-Onions.jpg', category: categories[9], price: 1.95},
    {name: 'Onion', emoji: 'https://produits.bienmanger.com/36700-0w0h0_Organic_Red_Onion_From_Italy.jpg', category: categories[9], price: 3.45},
    {name: 'Potato', emoji: 'https://m.media-amazon.com/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg', category: categories[9], price: 3.95},
    {name: 'Beets', emoji: 'https://d27p2a3djqwgnt.cloudfront.net/wp-content/uploads/2018/02/27060052/beets-2861272_1280.jpg', category: categories[9], price: 7.95},
    {name: 'Carrot', emoji: 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20180929_BLP506.jpg', category: categories[9], price: 7.95},
    {name: 'Zucchini', emoji: 'https://www.courier-journal.com/gcdn/presto/2021/08/15/NDRP/3acc8255-c8d9-46d2-a230-5390e0613622-pngaaa.com-1668290_copy.jpg', category: categories[9], price: 2.95},
    {name: 'Pumpkin', emoji: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Pumpkin-sliced-open-f2b8dde.jpg', category: categories[9], price: 3.95},
    {name: 'Eggplant', emoji: 'https://www.recipesbynora.com/wp-content/uploads/2023/02/Eggplant-Talong-featured-image.jpg', category: categories[9], price: 2.25},
    {name: 'Kale', emoji: 'https://www.biocabaz.pt/web/wp-conteudos/uploads/2016/04/Kale-Bundle-fixed.jpg', category: categories[9], price: 1.95},
  ]);

  console.log(items)

  process.exit();

})();
