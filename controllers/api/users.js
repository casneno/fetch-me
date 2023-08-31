const User = require('../../models/user');
const jwt = require('jsonwebtoken'); //https://jwt.io/libraries
const bcrypt = require('bcrypt');
//const { getUser } = require('../../src/utilities/users-apis');

module.exports = {
  create,
  login,
  getAllUsers,
  getUser,
  addFriend,
  removeFriend
};

/* -----------CREATE A NEW USER-------------- */
async function create (req, res){
  try {
    // Add the user to the db
    const user = await User.create(req.body)
    const token = createJWT(user);
    res.json(token); //here, we are using json to send back only a string (not an object data)
  } catch (err) {
    res.status(400).json(err); //the user won't see this error, but the developer will, which is great for debugging
  }
}

/* Helper Functions */

function createJWT(user){
  return jwt.sign(
    //data payload
    { user },
    //secret
    process.env.SECRET,
    //token expiration time
    { expiresIn: '24h'}
  );
}

/* ------------LOGIN USER------------ */

async function login (req,res){
  try{
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({email:email});
    if(!user) throw new Error(); //stops if there is no user
    const compare = await bcrypt.compare(password, user.password); //compare hashed passwords
    if(!compare) throw new Error(); //stops if passwords don't match
    const token = createJWT(user);
    res.json(token);
  } catch {
    res.status(400).json('Login Error');
  }
}

/* ----------GET ALL USERS---------- */

async function getAllUsers(req, res){
  try{
    const users = await User.find({}).sort('name').exec()
    res.json(users)
  } catch {
    console.error('Unable to retrieve all users')
  }
}

async function getUser(req, res){
  try{
    const user = await User.findById(req.params.id).populate('friends')
    res.json(user)
  } catch (error) {
    console.error(error)
  }
}

/* ------------ FRIEND HANDLING ----------- */

async function addFriend(req, res){
  try{
    const user = await User.findById(req.user._id)
    const friend = await User.findById(req.body.friendId)
    user.friends.push(friend)
    user.save()
    const popUser = await User.findById(req.user._id).populate('friends')
    res.status(200).json(popUser)
  } catch (err){
    console.error(err)
  }
}

async function removeFriend(req, res){
  try{
    const user = await User.findById(req.user._id)
    const friend = await User.findById(req.body.friendId)
    user.friends.splice(user.friends.indexOf(friend.id), 1)
    user.save()
    const popUser = await User.findById(req.user._id).populate('friends')
    res.status(200).json(popUser)
  } catch (err){
    console.error(err)
  }
}