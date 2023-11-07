import { prop } from '@typegoose/typegoose';
import { BaseEntity } from '../base';
export class Account extends BaseEntity {
  @prop({ required: true })
  name: string;

  @prop({ default: '' })
  avatar: string;

  @prop({ required: true })
  password: string;
}
export type LoginAccountDTO = Pick<Account, 'name' | 'password'>;

export type UpdateAccountDTO = Omit<Account, 'createBy' | 'createTime'>;

export type CreateAccountDTO = Omit<Account, 'createBy' | 'createTime'>;
