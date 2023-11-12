import { Ref, prop } from '@typegoose/typegoose';

import { TrackActionModel } from '../base';

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
export type CreateRoleDTO = Omit<Role, 'createAt' | 'updateAt'>;

export type UpdateRoleDto = Partial<Role>;
