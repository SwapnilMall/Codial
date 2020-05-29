const express = require('express'); // same instance as main index.js

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/user', require('./users'));

module.exports = router;
