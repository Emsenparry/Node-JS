import express from 'express'
import ArtistController from '../controllers/artist.controller.js' 

const ArtistRouter = express.Router()
// Calls a const of ArtistController class
const controller = new ArtistController

ArtistRouter.get('/artist', (request, response) => {
    console.log('Artist Route List');
    controller.list(request, response)
})

ArtistRouter.get('/artist/:id([0-9]*)', (request, response) => {
    console.log('Artist Route Detaljer');
    controller.details(request, response)
})

ArtistRouter.post('/artist', (request, response) => {
    console.log('Artist Route Opret');
    controller.create(request, response)
})

ArtistRouter.put('/artist', (request, response) => {
    console.log('Artist Route Opdater artist');
    controller.update(request, response)
})

ArtistRouter.delete('/artist/:id([0-9]*)', (request, response) => {
    console.log('Artist Route Slet artist');
    controller.delete(request, response)
})


export default ArtistRouter
