const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const filesController = {
   getFiles: (req, res) => {
        res.render('pages/files')
   },
   getUpload: async (req, res) => {
     const folders = await prisma.folder.findMany({
          where: { userId: req.user.id}
     })
    res.render('pages/upload', { folders: folders });
   },
   uploadFile: async (req, res) => {
     console.log(req.file);
     const file = await prisma.file.create({
          data: {
               name: req.file.originalname,
               url: req.file.path.replace('public/', ''),
               size: req.file.size,
               userId: Number(req.user.id),
               folderId: Number(req.body.folder)
          }
     })
     res.redirect('/');
   }
}

module.exports = filesController;
