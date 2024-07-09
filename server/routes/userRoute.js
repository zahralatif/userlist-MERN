const express = require('express');
const router = express.Router();
const { createUser, deleteUser, editUser, getAllUsers, getUserById } = require('../controllers/userController.js');

router.post('/user', createUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/edit/user/:id', editUser);
router.delete('/delete/:id', deleteUser);

module.exports = router