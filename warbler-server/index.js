const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./handlers/error');

const PORT = 8081;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// all routes
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
