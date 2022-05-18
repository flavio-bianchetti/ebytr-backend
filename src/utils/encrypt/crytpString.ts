import * as bcrypt from 'bcryptjs';

/**
 * Encrypts/verify password of user wity 'bcryptjs'.
 */
export default class CryptString {
  /**
   * Generate password encryption
   * @param password 
   * @returns bcrypt hash string
   */
  public static generate(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  /**
   * User password validated with encrypted password
   * @param password 
   * @param hash 
   * @returns boolean
   */
  public static verify(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
