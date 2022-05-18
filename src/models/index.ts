import { Sequelize } from 'sequelize';
import * as Config from '../config/database';

export default new Sequelize(Config);

export { default as User } from './user';
