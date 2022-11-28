import express from 'express'
import { router as SongRouter } from './routes/song.router.js'

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => { //App er vores objekt, get er en metode
    res.send('Forside');
})

app.use(SongRouter)

app.listen(port, () => {
    console.log(`Webserver running on http://localhost:${port}`);
})




// app.get('/about', (req, res) => {
//     res.send('About us');
// })

// app.get('/location', (req, res) => {
//     res.send('Find os');
// })

// app.get('/products', (req, res) => {
//     res.send('Vores produkter');
// })

// app.get('/contact', (req, res) => {
//     res.send('Kontakt os');
// })
