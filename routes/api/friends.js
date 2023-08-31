const express = require('express');
const router = express.Router();
const friendsCtrl = require('../../controllers/api/friends');

// GET /api/items
router.get('/', friendsCtrl.getAllFriends);
// GET /api/items/:id
// router.get('/:id', itemsCtrl.show);

module.exports = router;