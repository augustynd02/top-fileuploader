const { Router } = require('express');
const filesRouter = Router();
const filesController = require('../controllers/filesController.js');
const isAuth = require('../middleware/isAuth.js');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, Date.now() + extname);
  }
});

const upload = multer({ storage: storage });

filesRouter.get('/', isAuth, filesController.getFiles);
filesRouter.get('/upload', isAuth, filesController.getUpload);
filesRouter.post('/upload', isAuth, upload.single('file'), filesController.uploadFile);

module.exports = filesRouter;
