/**
 * Syncronise our database with our models
 */
import express from 'express'
import { sequelize } from '../config/sequelize.config.js'
const InitRouter = express.Router()

import UserModel from '../models/users.model.js'
// import SongModel from '../models/song.model.js'
// import ArtistModel from '../models/artist.model.js'
// import OrgModel from '../models/org.model.js'

/**
 * sequelize.sync() - When we call sync(), it creates a table from our models IF IT DOESNT ALREADY EXSIST
 */
InitRouter.get('/init', (request, response) => {
    try {
        sequelize.sync()
        response.sendStatus(200)
    }
    catch(err) {
        response.send(err)
    }
})

export default InitRouter