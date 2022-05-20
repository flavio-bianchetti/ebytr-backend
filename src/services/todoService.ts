import { Todo } from '../models';
import { ITodo } from '../interfaces';

export default class TodoService {
  /**
   * Create new todo
   * @param description 
   * @param userId
   * @param status 
   * @returns Promise Todo -> todo successfully created.
   * @returns Promise undefined -> todo already exists.
   */
  public static create
  = async (userId: number, description: string, status: string)
  : Promise<ITodo | undefined> => {
    const date = Date().toLocaleString();
    const todo = await Todo.create({ userId, description, date, status });
    if (!todo.id) return undefined;
    return {
    id: todo.id,
    userId,
    description,
    date,
    status,
    } as ITodo;
  };

  /**
   * Find all todo list of user.
   * @param userId 
   * @returns Promise Todo[] -> todo list
   */
  public static findAll = async (userId: number): Promise<ITodo[]> => {
    const todo = await Todo.findAll({ where: { userId }});
    return todo as ITodo[];
  };

  /**
   * Update one todo task.
   * @param id 
   * @param description 
   * @param status 
   * @returns Promise Todo -> todo task updated.
   * @returns Promise undefined -> todo not exists.
   * @returns Promise null -> update failure.
   */
  public static update
  = async (id: number, description: string, status: string)
  : Promise<ITodo | undefined | null> => {
    const task = await Todo.findByPk(id);
    if (!task) return undefined;
    let todo;
    if (status === '*') {
      todo = await Todo.update({ description }, { where: { id }});
    } else {
      todo = await Todo.update({ description, status }, { where: { id }});
    }
    const [affectedCount] = todo;
    if (affectedCount === 0) return null;
    return {
    id,
    userId: task.userId,
    description,
    date: task.date,
    status,
    } as ITodo;
  };

  /**
   * Delete one todo task.
   * @param id
   * @returns Promise 1 (number) -> todo task deleted.
   * @returns Promise 0 (number) -> todo task not found.
   */
  public static exclude = async (id: number): Promise<number> => {
    const todo = await Todo.destroy({ where: { id }});
    return todo;
  };
}
