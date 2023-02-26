const express = require("express");
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler');
const {registerUser, loginUser, currentUser, getAllUser} = require("../controllers/userController");

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateToken, currentUser);

router.get('/allusers',getAllUser);

module.exports = router;