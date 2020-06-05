const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Second middleware');
//   res.send('<h1>Response to your request</h1>');
// });

app.use('/users', (req, res, next) => {
  res.send('<h1>You are now in "/users"</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>You are now in "/"</h1>');
});

app.listen(3000);
