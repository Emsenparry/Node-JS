import express from 'express' //Importere express
import SongController from '../controllers/song.controller.js' 


const router = express.Router() //Laver en const der kalder router metoden
const controller = new SongController()

//GET LIST
router.get('/song', (req, res) => { //Kalder metoden get med et endpoint, derefter kalder req and res objekterne
    console.log('Liste: Kalder /song med GET');
    controller.list(res)
})

//GET DETAILS
router.get('/song/:id([0-9]*)', (req, res) => { 
    console.log('Detaljer: Kalder /song med GET');
    controller.details(req, res)
})

//POST
router.post('/song', (req, res) => { 
    console.log('Opret: Kalder /song med POST');
    const formData = `
    Title: ${req.body.title}
    Content: ${req.body.content}
    `
    res.send(`Opretter sang: ${formData}`)
})

//PUT
router.put('/song', (req, res) => { 
    console.log('Opdater: Kalder /song med PUT');
    const formData = `
    ID: ${req.body.id}
    Title: ${req.body.title}
    Content: ${req.body.content}
    `
    res.send(`Opdater sang: ${formData}`)
})

//DELETE
router.delete('/song/:id([0-9]*)', (req, res) => { 
    console.log('Slet: Kalder /song med DELETE');
    const formData = `
    ID: ${req.body.id}
    Title: ${req.body.title}
    Content: ${req.body.content}
    `
    res.send(`Sletter sang: ${formData}`)
})

export { router } //Exportere router som et name export, betyder at der er {} udenom. Det er bare en funktion vi exportere.
//Der findes default og name export. 