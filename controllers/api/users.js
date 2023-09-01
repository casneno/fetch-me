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
  } catch (err) {
    console.error('Unable to retrieve all users', err);
    res.status(500).send('Unable to retrieve all users');
  }
}

async function getUser(req, res){
  try{
    const user = await User.findById(req.params.id).populate('friends');
    if (!user) return res.status(404).send('User not found');
    res.json(user)
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching user');
  }
}

/* ------------ FRIEND HANDLING ----------- */

async function addFriend(req, res){
  try{
    const user = await User.findById(req.user._id)
    const friend = await User.findById(req.body.friendId)
    /* check if friend is already in user or if it exists */
    if (!friend) return res.status(404).send('Friend not found');
    if (user.friends.includes(friend._id)) return res.status(400).send('Already friends');

    user.friends.push(friend._id)
    await user.save()
    const popUser = await User.findById(req.user._id).populate('friends')
    res.status(200).json(popUser)
  } catch (err){
    console.error(err)
    res.status(500).send('Error adding friend');
  }
}

async function removeFriend(req, res){
  try{
    const user = await User.findById(req.user._id)
    const friend = await User.findById(req.body.friendId)
    /* check if friend exist or is in the user object */
    if (!friend) return res.status(404).send('Friend not found');
    if (!user.friends.includes(friend._id)) return res.status(400).send('Not friends');
    user.friends.splice(user.friends.indexOf(friend.id), 1)
    await user.save()
    const popUser = await User.findById(req.user._id).populate('friends')
    res.status(200).json(popUser)
  } catch (err){
    console.error(err)
    res.status(500).send('Error removing friend');
  }
}