const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/users');


router.post("/", userControllers.createUser);
router.post("/login", userControllers.loginUser);

module.exports = router;