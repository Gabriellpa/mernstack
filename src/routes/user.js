const userController = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/', userController.find);
router.post('/', userController.store);

module.exports = router;