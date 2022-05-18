import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import { UserService } from '../services';

export default class UserController {
  public static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password }: IUser = req.body;
      if (!password) return res.status(402).json({ message: 'Password is required' });
      const result = await UserService.create(name, email, password);
      if (result === undefined) return res.status(409).json({ message: 'E-mail already exists' });
      if (result === null) return res.status(422).json({ message: 'Encryption failure' });
      return res.status(201).json(result);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }
}
