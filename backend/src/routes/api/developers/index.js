const routes = require('express').Router()
const DevController = require('../../../app/controllers/DevController')
const LikeController = require('../../../app/controllers/LikeController')
const DislikeController = require('../../../app/controllers/DislikeController')

routes.get('/', DevController.index)
routes.post('/', DevController.store)
routes.post('/:devId/likes', LikeController.store)
routes.post('/:devId/dislikes', DislikeController.store)

module.exports = routes
