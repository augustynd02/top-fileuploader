const path = require("node:path");
const express = require('express');

const passport = require('passport');
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');

const indexRouter = require('./routes/indexRouter');
const filesRouter = require('./routes/filesRouter');
const foldersRouter = require('./routes/foldersRouter');

const app = express();

app.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
    },
    secret: 'akjx82J49asfSDF',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      new PrismaClient(),
      {
        checkPeriod: 2 * 60 * 1000,
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
  })
);

require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/', indexRouter);
app.use('/files', filesRouter);
app.use('/folders', foldersRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render('pages/error', {
    status: err.status || 500,
    message: err.message || 'Internal server error'
  });
});

app.listen(3000, () => console.log("Listening on port 3000..."));
