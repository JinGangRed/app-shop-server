import { prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export class Account extends TimeStamps {
  @prop({ required: true })
  name: string;

  @prop({ default: '' })
  avatar: string;

  @prop({ required: true })
  password: string;
}
export type LoginAccountDTO = Pick<Account, 'name' | 'password'>;

export type UpdateAccountDTO = Partial<
  Omit<Account, 'createdAt' | 'updatedAt'>
>;

export type CreateAccountDTO = Omit<Account, 'createdAt' | 'updatedAt'>;
