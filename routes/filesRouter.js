const { Router } = require('express');
const filesRouter = Router();
const filesController = require('../controllers/filesController.js')
const isAuth = require('../middleware/isAuth.js');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

filesRouter.get('/', isAuth, filesController.getFiles);
filesRouter.get('/upload', isAuth, filesController.getUpload);
filesRouter.post('/upload', isAuth, upload.single('file'), filesController.uploadFile);

module.exports = filesRouter;
