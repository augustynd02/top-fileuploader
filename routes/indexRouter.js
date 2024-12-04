const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController.js')

indexRouter.get('/', indexController.getIndex);
indexRouter.get('/register', indexController.getRegister);
indexRouter.post('/register', indexController.createUser);

module.exports = indexRouter;
