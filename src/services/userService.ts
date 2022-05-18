import { User } from '../models';
import { IUser, IUserToken } from '../interfaces';
import { CryptString, TokenGenerator } from '../utils';

export default class UserService {
  /**
   * Create new user
   * @param name 
   * @param email 
   * @param password 
   * @returns IUser -> user successfully created.
   * @returns undefined -> user already exists.
   * @returns null -> encryption failure.
   */
  public static create
  = async (name: string, email: string, password: string): Promise<IUser | undefined | null> => {
    const verifyUser = await User.findOne({ where: { email }});
    if (verifyUser !== null) return undefined;
    const encrypted = CryptString.generate(password);
    const user = await User.create({ name, email, password: encrypted });
    if (!user) return null;
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    } as IUser;
  };
}
