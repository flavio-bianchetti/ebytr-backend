import { Request, Response, NextFunction } from 'express';
import { ITodoCreate, IUser } from '../interfaces';

export default class ValidateRoutesEntries {
  public static validateCreateUser = (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
      const { name, email, password }: IUser = req.body;
      if (!name || !email || !password) return res.status(402).json({ message: 'Payload required' });
      if (
        typeof name !== 'string'
        || typeof email !== 'string'
        || typeof password !== 'string'
      ) return res.status(402).json({ message: 'Payload attributes type not supported' });
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };

  public static validateCreateTodoTask = (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
      const { userId, description, status } = req.body;
      if (!userId || !description || !status) return res.status(402).json({ message: 'Payload required' });
      if (
        typeof userId !== 'number'
        || typeof description !== 'string'
        || typeof status !== 'string'
      ) return res.status(402).json({ message: 'Payload attributes type not supported' });
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };

  public static validateParamId = (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
      const { id } = req.params;
      if (!id ) return res.status(402).json({ message: 'ID param required' });
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };

  public static validateUpdateTodoTask = (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
      const { description, status } = req.body;
      if (!description || !status) return res.status(402).json({ message: 'Payload required' });
      if (
        typeof description !== 'string'
        || typeof status !== 'string'
      ) return res.status(402).json({ message: 'Payload attributes type not supported' });
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };
}
