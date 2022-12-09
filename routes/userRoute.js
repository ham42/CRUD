const express = require('express');
const { registerUser, getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.route('/register').post(registerUser);
// router.route('/user').get(getUser);
router.route('/getall').get(getAllUsers);
router.route('/update').put(updateUser);
router.route('/delete').delete(deleteUser);

module.exports = router