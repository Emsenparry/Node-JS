import db from '../config/mysql.config.js'

/**
 * Constructor -> A method we call when the class is called
 */
class SongController {
    constructor() { 
        console.log('Song Controller has been fired');
    }
    /**
     * MUST have res on before we'll get a response back
     */
    list = res => { 
        const sql = "SELECT song.title, artist.name FROM song JOIN artist ON song.id = artist.id LIMIT 15"
        db.query(sql, (err, result) => {
        if(err) {
            console.error(err)
        } else {
            res.json(result);
        }
    })
    } 
    details = (req, res) => {
        // Declares id out from the url params. If it's not that then the ID is 0.
        const id = req.params.id || 0

        const sql = "SELECT s.title, s.content, s.id, a.name FROM song s JOIN artist a ON s.id = a.id WHERE s.id = ?"
        // Executes the SQL, id and the conditional statements
        db.query(sql, [id], (err, result) => {
        if(err) {
            console.error(err)
        } else {
            res.json(result);
        }
    }) 
    }
    create = (req, res) => {
        res.send('Sang oprettet')
        console.log(req.body);
    }
}

export default SongController