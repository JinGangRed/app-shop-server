import { prop, Ref } from '@typegoose/typegoose';

import { TrackActionModel } from '../base';

import { Account, Permission } from '@/types/entities';

export class Role extends TrackActionModel {
  @prop({ required: true, unique: true, trim: true })
  name!: string;

  @prop({ default: '' })
  displayName?: string;

  @prop({ default: '' })
  description?: string;

  @prop({ ref: () => Account, autopopulate: true })
  accounts?: Ref<Account>[];

  @prop({ ref: () => Permission })
  permissions?: Ref<Permission>[];
}
