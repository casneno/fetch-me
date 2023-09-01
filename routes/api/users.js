const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users'); //does not exist yet!
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);

// POST /api/users (login a user - sign up)
router.post('/login', usersCtrl.login);

// GET /api/users (find all users - sign up)
router.get('/index', ensureLoggedIn, usersCtrl.getAllUsers);

// GET /api/users (find user)
router.get('/:id', ensureLoggedIn, usersCtrl.getUser)

// PUT /api/users (add a friend)
router.put('/:id/addfriend', ensureLoggedIn, usersCtrl.addFriend);

// PUT /api/users (remove a friend)
router.put('/:id/rmfriend', ensureLoggedIn, usersCtrl.removeFriend);

module.exports = router