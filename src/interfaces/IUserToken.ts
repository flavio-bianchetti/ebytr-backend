import IUser from './IUser';

export default interface IUserToken extends IUser {
  token: string;
};
