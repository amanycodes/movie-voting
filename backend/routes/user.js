const {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile} = require('../controllers/userControllers')

const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

module.exports = router