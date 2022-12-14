import express from 'express' //importede express
import { router as SongRouter } from './routes/song.router.js' //Lavede en song.router.js fil og importede den fil til index
import dotenv from 'dotenv';

// ROUTES
import ArtistRouter from './routes/artist.router.js'
import InitRouter from './routes/init.router.js'
import UserRouter from './routes/user.router.js'
import OrgRouter from './routes/org.router.js'
import { router as AuthRouter } from './routes/authenticate.router.js'


dotenv.config();
const port = process.env.PORT || 3000 //Henter PORT fra .env filen. Hvis den ikke kan finde port 3000 i env filen så skal den være 3000.

const app = express()


app.use(express.urlencoded({ extended: true })) //Extended vores kald så vi kan se form data i en post. 

app.get('/', (req, res) => { //App er vores objekt, get er en metode
    res.send('Forside');
})

app.use(InitRouter)
app.use(AuthRouter)
app.use(UserRouter)
app.use(OrgRouter)

app.use(SongRouter)
app.use(ArtistRouter)



app.listen(port, () => { //Hvilken port skal den lytte til og derefter eksevere den en annoynym arrow funktion
    console.log(`Webserver running on http://localhost:${port}`);
})

