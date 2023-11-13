import { prop, Ref } from '@typegoose/typegoose';

import { ExculdeTrackType, ReplaceRef, TrackActionModel } from '../base';
import { Role } from '../role';
export class Account extends TrackActionModel {
  @prop({ required: true })
  username: string;

  @prop({ default: '' })
  avatar: string;

  @prop({ required: true })
  password: string;

  @prop({ ref: () => Role })
  roles?: Ref<Role>[];
}

export type LoginAccountDTO = Pick<Account, 'username' | 'password'>;

export type CreateAccountDTO = ReplaceRef<ExculdeTrackType<Account>>;

export type UpdateAccountDTO = Partial<CreateAccountDTO>;

export type QueryAccountDTO = Partial<CreateAccountDTO>;
