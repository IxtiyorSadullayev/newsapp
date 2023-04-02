const { Createuser, SignIn, UpdateUser, DeleteUser, GetAllUsers, GetOneUser } = require('../controllers/user.controller');

const router = require('express').Router()

router.post('/register', Createuser )
router.post('/signin', SignIn)
router.patch('/update/:id', UpdateUser )
router.get('/users', GetAllUsers)
router.delete('/user/:id', DeleteUser)
router.get('/user/:id', GetOneUser)

module.exports = router;