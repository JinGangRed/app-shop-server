import { prop, Ref } from '@typegoose/typegoose';

import { TrackActionModel } from '../base';
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
