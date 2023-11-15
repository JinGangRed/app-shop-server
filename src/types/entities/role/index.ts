import { prop, Ref } from '@typegoose/typegoose';

import { TrackActionModel } from '../base';

import { Permission } from '@/types/entities';

export class Role extends TrackActionModel {
  @prop({ required: true })
  name: string;

  @prop()
  displayName?: string;

  @prop({ default: '' })
  description?: string;

  @prop({ ref: () => Permission })
  permissions?: Ref<Permission>[];
}
