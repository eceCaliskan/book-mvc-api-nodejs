const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')

router.get('/', bookController.getBooks)
router.post('/', bookController.addBooks)
router.get('/:id', bookController.findBooks)
router.delete('/:id', bookController.deleteBooks)
router.put('/:id', bookController.updateBooks)
module.exports = router;