import { Ref, prop } from '@typegoose/typegoose';

import { Role } from '../role';
import { TrackActionModel } from '../base';
export class Account extends TrackActionModel {
  @prop({ required: true })
  username: string;

  @prop({ default: '' })
  avatar: string;

  @prop({ required: true })
  password: string;

  @prop({ type: () => Role })
  roles?: Ref<Role>[];
}
export type LoginAccountDTO = Pick<Account, 'username' | 'password'>;

export type UpdateAccountDTO = Partial<
  Omit<Account, 'createdAt' | 'updatedAt'>
>;

export type CreateAccountDTO = Omit<Account, 'createdAt' | 'updatedAt'>;

export type QueryAccountDTO = Partial<Account>;
