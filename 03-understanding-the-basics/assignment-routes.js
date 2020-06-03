const fs = require('fs');

const handleRequest = (req, res) => {
  const { url, method } = req;

  if (url === '/users') {
      res.setHeader('Content-type', 'text/html');
      res.write(`
      <html>
        <header></header>
        <body>
          <ul>${fs.readFileSync('./users.txt')}</ul>
        </body>
      </html>
      `);
      res.end;
  }

  if (url === '/create-user' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
          body.push(chunk);
      });

      return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          console.log(message);
          const users = fs.readFileSync('./users.txt').toString().concat(' ', message);
          fs.writeFile('./users.txt', users, (err) => {
              res.statusCode = 302;
              res.setHeader('Content-type', 'text/html');
              res.write(`
              <html>
                <header></header>
                <body>
                  <h1>Welcome ${message}</h1>
                </body>
              </html>
              `);
              res.end();
          });
      });
  }

  if (url === '/') {
      res.setHeader('Content-type', 'text/html');
      res.write(`
      <html>
        <header></header>
        <body>
          <h1>Welcome to the first assignment</h1>
          <form method="POST" action="/create-user">
            <input type="text" name="username"></input>
            <button type="submit">Create new user</button>
          </form>
        </body>
      </html>
      `);
      res.end;
  }
}

module.exports = handleRequest;
