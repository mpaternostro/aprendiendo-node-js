const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const usernames = [];

router.get('/', (req, res, next) => {
  res.render('form', { pageTitle: 'Home' });
});

router.post('/add-username', urlencodedParser, (req, res, next) => {
  usernames.push(req.body.username);
  res.redirect('/users');
});

exports.routes = router;
exports.usernames = usernames;
