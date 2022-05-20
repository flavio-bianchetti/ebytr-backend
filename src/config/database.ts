import 'dotenv/config';
import { Options } from 'sequelize';

const {
  DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT,
} = process.env;

const Config: Options = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOSTNAME,
  port: Number(DB_PORT) || 3306,
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = Config;
