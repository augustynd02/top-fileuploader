const { Router } = require('express');
const filesRouter = Router();
const filesController = require('../controllers/filesController.js')
const isAuth = require('../middleware/isAuth.js');

filesRouter.get('/', isAuth, filesController.getFiles);
filesRouter.get('/upload', isAuth, filesController.getUpload);
filesRouter.post('/upload', isAuth, filesController.uploadFile);

module.exports = filesRouter;
