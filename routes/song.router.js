import express from 'express' //Importere express

const router = express.Router() //Laver en const der kalder router metoden

//GET
router.get('/song', (req, res) => { //Kalder metoden get med et endpoint, derefter kalder req and res objekterne
    console.log('Liste: Kalder /song med GET');
})

//GET
router.get('/song/:id([0-9]*)', (req, res) => { 
    console.log('Detaljer: Kalder /song med GET');
})

//POST
router.post('/song', (req, res) => { 
    console.log('Opret: Kalder /song med POST');
})

//PUT
router.put('/song', (req, res) => { 
    console.log('Opdater: Kalder /song med PUT');
})

//DELETE
router.delete('/song/:id([0-9]*)', (req, res) => { 
    console.log('Slet: Kalder /song med DELETE');
})

export { router } //Exportere router som et name export, betyder at der er {} udenom. Det er bare en funktion vi exportere.
//Der findes default og name export. 