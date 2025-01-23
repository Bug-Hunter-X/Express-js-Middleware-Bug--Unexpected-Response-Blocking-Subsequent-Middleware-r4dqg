const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Uncommon bug: Incorrect use of middleware leading to unexpected behavior
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  // Bug: This middleware always sends a response.  No other middleware runs and the route handler won't execute.
  res.send('Middleware 2 intercepted');
});

app.get('/another', (req, res) => {
  res.send('Another route');
});