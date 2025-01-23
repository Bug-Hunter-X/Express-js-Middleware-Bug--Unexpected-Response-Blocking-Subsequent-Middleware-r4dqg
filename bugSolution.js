const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  // Solution: Removed res.send() to allow other middleware and route handlers to execute
  console.log('Middleware 2');
  next();
});

app.get('/another', (req, res) => {
  res.send('Another route');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});