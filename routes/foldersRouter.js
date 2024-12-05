const { Router } = require('express');
const foldersRouter = Router();
const foldersController = require('../controllers/foldersController.js')

foldersRouter.get('/', foldersController.getFolders);
foldersRouter.get('/create', foldersController.getCreateFolder);
foldersRouter.post('/create', foldersController.createFolder);

module.exports = foldersRouter;