/**
 * Imports express package
 * Imports SongController from song.controller.js file
 */
import express from 'express'
import SongController from '../controllers/song.controller.js' 

/**
 * express.Router() -> Creates a const which calls the router method
 */
const router = express.Router() 
const controller = new SongController()

//GET - LIST
/**
 * Calls method GET with an endpoints which afterwards calls the (req and) res objects.
 * List only have 1 argument which is res
 */
router.get('/song', (req, res) => {
    console.log('Liste: Kalder /song med GET');
    controller.list(req, res)
})

//GET - DETAILS
router.get('/song/:id([0-9]*)', (req, res) => { 
    console.log('Detaljer: Kalder /song med GET');
    controller.details(req, res)
})

//POST
router.post('/song', (req, res) => { 
    console.log('Opret: Kalder /song med POST');
    controller.create(req, res)
})

//PUT
router.put('/song', (req, res) => { 
    console.log('Opdater: Kalder /song med PUT');
    controller.update(req, res)
})

//DELETE
router.delete('/song/:id([0-9]*)', (req, res) => { 
    console.log('Slet: Kalder /song med DELETE');
    controller.delete(req, res)
})

export { router } //Exportere router som et name export, betyder at der er {} udenom. Det er bare en funktion vi exportere.
//Der findes default og name export. 