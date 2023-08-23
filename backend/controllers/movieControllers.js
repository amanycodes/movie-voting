const Movie = require('../models/movie')
const mongoose = require('mongoose')

//post a movie
const createMovie = async (req,res) =>{
    const {title, overview, genre} = req.body 
    try {
        const movie = await Movie.create({title, overview, genre})
        res.status(200).json(movie)
    }catch(error){
        res.status(400).json({error: error})
    }
}
 
//delete a movie
const deleteMovie = async (req,res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'not valid'})
    }

    const movie = await Movie.findOneAndDelete({_id: id})

    if(!movie){
        res.status(400).json({error: 'no such movie'})
    }
    res.json(movie)
}

//update a movie
const updateMovie = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'not valid'})
    }
    const movie = await Movie.findOneAndUpdate({_id: id},{
        ...req.body,
        title: 'soft nipples'
    })

    if(!movie){
        res.status(400).json({error: 'no such movie'})
    }
    res.json(movie)
}

//get all movies
const getMovies = async (req,res) => {
    const movies = await Movie.find({})

    res.status(200).json(movies)
}

module.exports = {
    createMovie, 
    getMovies,
    updateMovie,
    deleteMovie 
}