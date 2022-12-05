import express from 'express'
import { sequelize } from '../config/sequelize.config.js'
const InitRouter = express.Router()

import UserModel from '../models/users.model.js'

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