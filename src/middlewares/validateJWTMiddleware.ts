import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { User } from '../models';
import { IUser } from '../interfaces';

const SECRET = process.env.JWT_SECRET || 'minhaSuperSenha';

export default class ValidateJWTMiddleware {
  public static validate
  = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    try {
      const decoded = jwt.verify(token, SECRET);
      if (typeof decoded === 'string') return res.status(401).json({ message: 'Token invalid' });
      const { id, email }: IUser = decoded.data;
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(401).json({ message: 'User token not found' });
      next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  };
}
