import { prop, Ref } from '@typegoose/typegoose';
import { hashSync } from 'bcrypt';

import { TrackActionModel } from '../base';
import { Role } from '../role';
export class Account extends TrackActionModel {
  @prop({ required: true, unique: true, trim: true })
  username!: string;

  @prop({ trim: true })
  name!: string;

  @prop({ default: '' })
  avatar?: string;

  @prop({
    required: true,
    select: false,
    get: (val: string) => val,
    set: (val: string) => hashSync(val, 10),
  })
  password!: string;

  @prop()
  mail?: string;

  @prop({ ref: () => Role, autopopulate: true })
  roles?: Ref<Role>[];
}
