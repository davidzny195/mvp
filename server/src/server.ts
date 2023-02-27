require('dotenv').config();
const express = require('express');
const logger = require('../middleware/logger');
const morganMiddleware = require('../middleware/morgan.middleware');

const app = express();

app.use(express.json());
app.use(morganMiddleware);
app.use('/', (req, res) => {
  res.send('Hello');
});

app.listen(process.env.PORT || 8080, () => {
  logger.info(`Listing on port ${process.env.PORT}`);
});