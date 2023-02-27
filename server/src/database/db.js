const { Pool } = require('pg');
const logger = require('../middleware/logger.ts');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: 5432,
});

pool.on('error', (err) => {
  logger.warn('Unexpected error on idle client', err);
  process.exit(-1);
});

pool.on('connect', (client) => {
  logger.info(
    `pool connected to ${client.user}@${client.host} using database ${client.database} on port ${client.port}`
  );
});

module.exports = pool;
