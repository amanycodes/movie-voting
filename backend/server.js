require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const movieRoutes = require('./routes/movie')
const userRoutes = require('./routes/user')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')

connectDB()

//express app
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


//routes
app.use('/movies',movieRoutes)
app.use('/user', userRoutes)

//errorhandler
app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, ()=> console.log(`server started on port ${process.env.PORT}`))
