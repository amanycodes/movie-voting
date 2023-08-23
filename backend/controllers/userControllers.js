const asyncHandler = require('express-async-handler')
const User = require('..//models/user')
const generateToken = require('../utils/generateToken')

// @desc Auth User/set token
// @route users/auth
// @access public 
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    if(user && (await user.matchPasswords(password))){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error('Invalid email or password')
    }

}) 

// @desc Register User
// @route users/
// @access public 
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('user aldready exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error('Invalid user Data')
    }
})

// @desc Logout user
// @route users/logout
// @access public 
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({
        message: 'user logged out'
    })
})

// @desc get user profile
// @route GET users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    res.status(200).json(user)
})

// @desc Update user profile
// @route PUT users/profile
// @access public 
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = User.findbyId(req.user._id)

    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if(req.body.password){
            user.password = req.body.password
        }

        await user.save()
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})


module.exports = {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile};