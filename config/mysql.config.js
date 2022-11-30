import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

/**
 * Creates a const that connects to our HeidiSQL database Techcollege where song and artist data is.
 * process.env.DBHOST etc is variables from the .env file
 */
const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWD,
    database: process.env.DBNAME
})

connection.connect()

/**
 * Exports as default because we only use one export
 */
export default connection