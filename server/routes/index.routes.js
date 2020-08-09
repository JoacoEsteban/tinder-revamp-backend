const UsersController = require('../controllers/users.controller')

function init (app) {
  app.get('/users', UsersController.listUsers)
  app.get('/users/:id', UsersController.getUserById)
}

module.exports = init
