import { DataTypes, Model } from 'sequelize';
import database from '.';

class User extends Model {
  public id!: number;

  public name!: string;

  public email!: string;

  public password!: string;
}

User.init({
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  }
}, {
  sequelize: database,
  modelName: 'users',
  timestamps: false,
});

export default User;
