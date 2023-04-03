const { CreateCategory, GetAllCategory, UpdateCategory, DeleteCategory } = require('../controllers/category.controller')
const { GenerateUser } = require('../helpers/generate.Token')

const router = require('express').Router()

router.post('/', GenerateUser("Admin"), CreateCategory)
router.get('/', GetAllCategory)
router.patch('/:id', GenerateUser("User"), UpdateCategory)
router.delete('/:id',GenerateUser("User"), DeleteCategory)

module.exports = router;