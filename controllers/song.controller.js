import db from '../config/mysql.config.js'
import SongModel from '../models/song.model.js'

/**
 * Constructor -> A method we call when the class is called
 */
class SongController {
    constructor() { 
        console.log('Song Controller has been fired');
    }
    
    // MUST have res on before we'll get a response back
    list = (req, res) => { 
        let { sortkey, sortdir, limit, attributes } = req.query
        /**
         * Checks if sortkey is true. 
         * If it is true then it gotta pick itself
         * If NOT true then it will pick the ID
         */
        sortkey = sortkey ? sortkey : 'id' 
        sortdir = sortdir ? sortdir.toUpperCase() : 'ASC'
        // Checks if what is parsed is a Int (number)
        limit = limit ? `LIMIT ${parseInt(limit)}` : ''
        // Choose which felter you want to be displayed
        attributes = attributes ? attributes : 's.id, s.title, a.name'
        console.log(sortkey);

        // Declares SQL
        const sql = `SELECT ${attributes}
                        FROM song s
                        JOIN artist a
                        ON s.artist_id = a.id
                        ORDER BY ${sortkey} ${sortdir} ${limit}`
        console.log(sql);
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

        const sql = `SELECT s.title, s.content, s.id, a.name 
                        FROM song s 
                        JOIN artist a 
                        ON s.artist_id = a.id 
                        WHERE s.id = ?`
        // Executes the SQL, id and the conditional statements
        db.query(sql, [id], (err, result) => {
        if(err) {
            console.error(err)
        } else {
            res.json(result);
        }
    }) 
}
    /**
     * Creates a method with two arguments in, the req and res objects
     * Creates variables which is then inserted into song 
     * Afterwards we query the sql, the array and the conditional statements 
     */
create = (req, res) => {

    let title = req.body.title
    let content = req.body.content
    let artist_id = req.body.artist_id

    const sql = `INSERT INTO song (title, content, artist_id) VALUES (?, ?, ?)`
    db.query(sql, [title, content, artist_id], (err, result) => {
    if(err) {
    console.error(err)
    } else {
    console.log('Sang oprettet')
    res.json(result);
    }
})
}

update = (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const content = req.body.content

    const sql = `UPDATE song SET
                    title = ?,
                    content = ?
                    WHERE id = ?`
                    console.log(sql);
    db.query(sql, [title, content, id], (err, result) => {
        if(err) {
            console.error(err) 
        } else {
            res.json(result)
        }
    })
}

delete = (req, res) => {
    const id = req.params.id || 0

    const sql = `DELETE FROM song
                    WHERE id = ?`
        db.query(sql, [id], (err, result) => {
        if(err) {
            console.error(err)
        } else {
            res.json(result);
        }
})
}
}

export default SongController