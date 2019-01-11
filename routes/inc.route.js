const express = require('express');
const router = express.Router();

const board_controller = require('../controllers/board.controller');
const user_controller = require('../controllers/user.controller');

router.get('/test', user_controller.test);
router.post('/user', user_controller.join);
router.get('/user', user_controller.list);
router.post('/approve', user_controller.approve);
router.post('/board', board_controller.join);
router.get('/board', board_controller.list);

module.exports = router;