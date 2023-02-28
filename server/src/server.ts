require('dotenv').config();
import express from 'express';
import logger from './middleware/logger';
import morganMiddleware from './middleware/morgan.middleware';
import routes from './routes';
const app: express.Application = express();

// Middleware
app.use(express.json());
app.use(morganMiddleware);

app.use('/', routes());

app.listen(process.env.PORT || 8080, () => {
  logger.info(`Listing on port ${process.env.PORT}`);
});
