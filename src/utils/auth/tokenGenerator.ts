import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { IUser } from '../../interfaces';

/**
 * Encrypts information with 'jsonwebtoken', generating a token
 */
export default class JWT {
  /**
   * Encrypts the IUser data object, generating a token or returning an error.
   * @param data
   * @returns token
   * @returns undefined if JWT_SECRET attribute is not informed
   * @returns null if na error occurs during the conversion
   */
  public static encrypt = (data: IUser): string | undefined | null  => {
    const SECRET = process.env.JWT_SECRET;
    if (!SECRET || SECRET.length === 0) return undefined;
    try {
      const token = jwt.sign({ data }, SECRET, {
        expiresIn: '7d',
        algorithm: 'HS256',
      });
      return token;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
