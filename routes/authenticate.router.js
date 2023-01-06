import express from 'express'
import AuthenticateController from '../controllers/authenticate.controller.js'
import verifyToken from '../middleware/verify.token.js'
const router = express.Router()

const controller = new AuthenticateController();

router.post('/login', (req, res) => { controller.login(req, res) })
router.get('/protected', verifyToken, (req, res) => { controller.protected(req, res) }) 

export { router }
