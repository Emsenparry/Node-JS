import db from '../config/mysql.config.js'

/**
 * Constructor -> A method we call when the class is called
 */
class ArtistController{
    constructor () {
        console.log("Artist Controller is fired");
    }

    list = (request, response) => {
       let { sortkey, sortdir, limit, attributes } = request.query 
       sortkey = sortkey ? sortkey : 'id'
       sortdir = sortdir ? sortdir : 'ASC'
       limit = limit ? `LIMIT ${limit}` : ''
       attributes = attributes ? attributes : 'id, name' 


        const sql = `SELECT ${attributes}
                        FROM artist
                        ORDER BY ${sortkey} ${sortdir}
                        ${limit}
                        `
        db.query(sql, (err, result) => {
            if (err) {
                console.error(err) 
            } else {
                response.json(result)
            }
        })
    }
    details = (request, response) => {
        const id = request.params.id || 0

        const sql = `SELECT id, name
                        FROM artist
                        WHERE id = ?
                        `
        db.query(sql, [id], (err, result) => {
            if(err) {
                console.error(err)
            } else {
                response.json(result);
            }
        })
    }
    create = (request, response) => {
        let { name } = request.body;
    
        const sql = `INSERT INTO 
                        artist (name) 
                        VALUES (?)`
        db.query(sql, [name], (err, result) => {
          if(err) {
            console.error(err)
          } else {
            console.log('Artist oprettet')
            response.json(result);
          }
      })
    }
    update = (req, res) => {
       let { name, id } = req.body;
    
        const sql = `UPDATE artist SET
                        name = ?
                        WHERE id = ?`
        db.query(sql, [name, id], (err, result) => {
            if(err) {
                console.error(err) 
            } else {
                res.json(result)
            }
        })
    }
    
    	
}

export default ArtistController