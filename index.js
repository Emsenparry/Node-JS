import express from 'express'

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => { //App er vores objekt, get er en metode
    res.send('Forisde');
})

app.get('/about', (req, res) => {
    res.send('About us');
})

app.get('/abilities', (req, res) => {
    res.send('Hvad kan vi?');
})

app.get('/location', (req, res) => {
    res.send('Find os');
})

app.get('/products', (req, res) => {
    res.send('Vores produkter');
})

app.get('/details', (req, res) => {
    res.send('Detaljer af vores produkter');
})

app.get('/contact', (req, res) => {
    res.send('Kontakt os');
})

app.post('/song', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Webserver running on http://localhost:${port}`);
})