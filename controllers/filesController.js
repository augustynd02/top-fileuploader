const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const filesController = {
   getFiles: (req, res) => {
        res.render('pages/files')
   },
   getUpload: (req, res) => {
    res.render('pages/upload');
   },
   uploadFile: (req, res) => {
        res.redirect('/');
   }
}

module.exports = filesController;
