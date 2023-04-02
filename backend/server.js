require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const movieRoutes = require('./routes/movie')

//express app
const app = express()

//middleware
app.use(express.json()) 


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=> {
            console.log('listening')
        })
    })
    .catch((error)=>{
        console.log(error)
    })

//routes
app.use('/movies',movieRoutes)

