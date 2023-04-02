const express = require('express')
const {
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie
} = require('../controllers/movieControllers')

const router = express.Router()

//post a new movie
router.post('/', createMovie)

//delete a new movie
router.delete('/:id',deleteMovie)

//update a movie
router.patch('/:id', updateMovie)

//get all movies
router.get('/all', getMovies)
module.exports = router