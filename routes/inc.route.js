const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/test', user_controller.test);
router.post('/user', user_controller.join);
router.get('/user', user_controller.list);
router.post('/approve', user_controller.approve);

module.exports = router;