const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const foldersController = {
    getFolders: async (req, res) => {
        const folders = await prisma.folder.findMany({
            where: { userId: req.user.id }
        })
        res.render('pages/folders', { folders: folders });
    },
    getCreateFolder: (req, res) => {
        res.render('pages/createFolder');
    },
    createFolder: async (req, res) => {
        const folder = await prisma.folder.create({
            data: {
                name: req.body.name,
                userId: req.user.id
            }
        })
        res.redirect('/folders');
    },
    getFolderById: async (req, res) => {
        const folder = await prisma.folder.findUnique({
            where: { id: Number(req.params.id) }
        })
        const files = await prisma.file.findMany({
            where: { folderId: Number(req.params.id) }
        })
        res.render('pages/folder', { folder: folder, files: files });
    }
}

module.exports = foldersController;
