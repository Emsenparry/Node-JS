import express from 'express'
import OrgController from '../controllers/org.controller.js'

const OrgRouter = express.Router()
const controller = new OrgController

OrgRouter.get('/org', (req, res) => { controller.list(req, res) })
OrgRouter.get('/org/:id([0-9]*)', (req, res) => { controller.details(req, res) })
OrgRouter.post('/org', (req, res) => { controller.create(req, res) })
OrgRouter.put('/org/:id([0-9]*)', (req, res) => { controller.update(req, res) })
OrgRouter.delete('/org/:id([0-9]*)', (req, res) => { controller.delete(req, res) })

export default OrgRouter