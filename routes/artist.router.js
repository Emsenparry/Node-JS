import express from 'express'
import ArtistController from '../controllers/artist.controller.js' 

const ArtistRouter = express.Router()
// Calls a const of ArtistController class
const controller = new ArtistController

ArtistRouter.get('/artist', (request, response) => {
    console.log('Artist Route List');
    controller.list(request, response)
})

export default ArtistRouter
