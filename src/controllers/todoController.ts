import { Request, Response } from 'express';
import { TodoService } from "../services";
import { ITodoCreate, ITodoUpdate } from '../interfaces';

export default class TodoController {
  public static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { userId, description, status }: ITodoCreate = req.body;
      const todo = await TodoService.create(userId, description, status);
      if (todo === undefined) return res.status(409).json({ message: 'Todo task already exists' });
      return res.status(201).json(todo);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };

  public static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const todo = await TodoService.findAll(Number(id));
      return res.status(200).json(todo);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };

  public static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { description, status }: ITodoUpdate = req.body;
      const todo = await TodoService.update(Number(id), description, status);
      if (todo === undefined) return res.status(409).json({ message: 'Todo task not found' });
      if (todo === null) return res.status(422).json({ message: 'Update failure' });
      return res.status(200).json(todo);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };

    public static delete = async (req: Request, res: Response): Promise<Response> => {
      try {
        const { id } = req.params;
        const todo = await TodoService.exclude(Number(id));
        if (todo === 0) return res.status(409).json({ message: 'Todo task not found' });
        return res.status(200).end();
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
    }
}