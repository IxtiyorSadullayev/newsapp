const { CreateCategory, GetAllCategory, UpdateCategory, DeleteCategory } = require('../controllers/category.controller')

const router = require('express').Router()

router.post('/', CreateCategory)
router.get('/', GetAllCategory)
router.patch('/:id', UpdateCategory)
router.delete('/:id', DeleteCategory)

module.exports = router;