const exerciseController = require('../controllers/exercise.controller');
const router = require('express').Router();

router.get('/', exerciseController.find);
router.post('/', exerciseController.store);
router.get('/:id', exerciseController.findById);
router.post('/:id', exerciseController.update);
router.delete('/:id', exerciseController.delete);

module.exports = router;