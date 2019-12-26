const exerciseController = require('../controllers/exercise.controller');
const router = require('express').Router();

router.get('/', exerciseController.find);
router.post('/', exerciseController.store);

module.exports = router;