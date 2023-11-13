import { prop, Ref } from '@typegoose/typegoose';

import { ExculdeTrackType, ReplaceRef, TrackActionModel } from '../base';

import { Permission } from '@/types/entities/permission';

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
export type CreateRoleDTO = ReplaceRef<ExculdeTrackType<Role>>;

export type UpdateRoleDto = Partial<CreateRoleDTO>;

export type QueryRoleDto = Partial<CreateRoleDTO>;
