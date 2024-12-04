const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController.js')

const passport = require('passport');
require('../config/passport');

indexRouter.get('/', indexController.getIndex);
indexRouter.get('/register', indexController.getRegister);
indexRouter.post('/register', indexController.createUser);
indexRouter.get('/login', indexController.getLogin);
indexRouter.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/register"
}));

module.exports = indexRouter;
