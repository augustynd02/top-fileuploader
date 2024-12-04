const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const indexController = {
    getIndex: (req, res) => {
        res.render('pages/index');
    },
    getRegister: (req, res) => {
        res.render('pages/register')
    },
    createUser: async (req, res) => {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const user = req.body;
        await prisma.user.create({
            data: {
                username: user.username,
                password: user.password
            }
        })
        res.redirect('/');
    },
    getLogin: (req, res) => {
        res.render('pages/login');
    }
}

module.exports = indexController;
