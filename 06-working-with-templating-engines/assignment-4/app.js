const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const formRouter = require('./routes/form');
const usersRouter = require('./routes/users');

app.use(formRouter.routes);

app.use('/users', usersRouter);

app.use('/', (req, res, next) => {
  res.status(404).render('404', { pageTitle: '404 Error', description: 'Page not found' });
})

app.listen(3000);
