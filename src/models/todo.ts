import { DataTypes, Model } from 'sequelize';
import database from '.';
import User from './user';

class Todo extends Model {
  public id!: number;

  public userId!: number;

  public description!: string;

  public date!: string;

  public status!: string;
}

Todo.init({
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.NUMBER,
  },
  description: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  }
}, {
  underscored: true,
  sequelize: database,
  modelName: 'todos',
  timestamps: false,
});

Todo.belongsTo(User, { foreignKey: 'userId', as: 'todoBelongsToUser' });

User.hasMany(Todo, { foreignKey: 'id', as: 'UserHasManyTodo' });

export default Todo;
