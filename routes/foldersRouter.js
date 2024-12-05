const { Router } = require('express');
const foldersRouter = Router();
const foldersController = require('../controllers/foldersController.js')

foldersRouter.get('/', foldersController.getFolders);

module.exports = foldersRouter;
