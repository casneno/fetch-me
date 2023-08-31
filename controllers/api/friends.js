const User = require('../../models/user');
const jwt = require('jsonwebtoken'); //https://jwt.io/libraries
const bcrypt = require('bcrypt');

module.exports = {
  getAllFriends,
};

async function getAllFriends(req, res){
  try{
    const users = await User.find({}).sort('name').exec()
    res.json(users)
  } catch {
    console.error('Unable to retrieve all users')
  }
}