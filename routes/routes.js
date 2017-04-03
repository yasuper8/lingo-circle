const UserController = require('../controllers/users_controller');

module.exports = (app) => {

  app.get('/api', UserController.greeting);

};
