import express from 'express'

import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'
import ProffyController from './controllers/ProffyController'

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()
const proffyController = new ProffyController()

const routes = express.Router()

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

routes.put('/proffys', proffyController.update)

export default routes