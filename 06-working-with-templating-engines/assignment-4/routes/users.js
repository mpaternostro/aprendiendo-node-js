const express = require('express');

const formData = require('./form');

const router = express.Router();

router.get('/', (req, res, next) => {
  const usernames = formData.usernames;
  res.render('users', { pageTitle: 'Users', usernames });
});

module.exports = router;
