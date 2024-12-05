const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const foldersController = {
    getFolders: async (req, res) => {
        const folders = prisma.folder.findMany({
            where: { userId: req.user.id }
        })
        res.render('pages/folders', { folders: folders });
    }
}

module.exports = foldersController;
