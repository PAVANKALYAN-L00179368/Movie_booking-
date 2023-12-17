const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD Routes

router.post('/create', userController.createUser);
router.get('/read', userController.getUsers);
router.put('/update/:userId', userController.updateUser);
router.delete('/delete/:userId', userController.deleteUser);

// Signup Route with Confirm Password
router.post('/signup', userController.signup);

module.exports = router;
