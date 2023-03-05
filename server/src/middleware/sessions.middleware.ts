import { RequestHandler } from 'express';
import session from 'express-session';

const sessionMiddleware: RequestHandler = session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
});

export default sessionMiddleware;
