const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const foldersController = {
    getFolders: async (req, res) => {
        const folders = prisma.folder.findMany({
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
        console.log(folder);
        res.redirect('/folders');
    }
}

module.exports = foldersController;
