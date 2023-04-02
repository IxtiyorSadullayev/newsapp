const { CreateCategory, GetAllCategory, UpdateCategory, DeleteCategory } = require('../controllers/category.controller')

const router = require('express').Router()

router.post('/category', CreateCategory)
router.get('/category', GetAllCategory)
router.patch('/category/:id', UpdateCategory)
router.delete('/category/:id', DeleteCategory)

module.exports = router;