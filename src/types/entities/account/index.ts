import { Ref,  prop } from '@typegoose/typegoose';

import { Role } from '../role';
import {  ExculdeTrackType, ExculdeType, Override, TrackActionModel } from '../base';
export class Account extends TrackActionModel {
  @prop({ required: true })
  username: string;

  @prop({ default: '' })
  avatar: string;

  @prop({ required: true })
  password: string;

  @prop({ type: () => Role })
  roles?: Ref<Role>[];

  a:string[]

}
export type LoginAccountDTO = Pick<Account, 'username' | 'password'>;

export type UpdateAccountDTO = Partial<
  Omit<Account, 'createdAt' | 'updatedAt'>
>;

export type CreateAccountDTO = Override<ExculdeType<Account,TrackActionModel>,{roles?:Role[]}>


export type QueryAccountDTO = Partial<Account>;
