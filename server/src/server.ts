require('dotenv').config();
import express from 'express';
import logger from './middleware/logger';
import cors from 'cors';
import morganMiddleware from './middleware/morgan.middleware';
import sessionMiddleware from './middleware/sessions.middleware';
import routes from './routes';
const app: express.Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(sessionMiddleware);
app.use(morganMiddleware);

app.use('/', routes());

app.listen(process.env.PORT || 8080, () => {
  logger.info(`Listing on port ${process.env.PORT}`);
});
