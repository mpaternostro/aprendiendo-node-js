const path = require('path');
const express = require('express');

const app = express();

const usersRouter = require('./routes/users-router');
const homeRouter = require('./routes/home-router');
const pageNotFoundRouter = require('./routes/page-not-found.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

app.use(homeRouter);

app.use(pageNotFoundRouter);

app.listen(3000);
