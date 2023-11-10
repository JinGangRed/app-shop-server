import { TrackActionModel } from '../base';

// 权限
export enum PermissionType {
  Route,
  Action,
}

export class Permission extends TrackActionModel {
  type?: PermissionType = PermissionType.Action;
  subject?: string;
  action?: string;
  actionCode?: string;
  displayName?: string;
  description?: string;
  path?: string;
}

export type CreatePermissionDTO = Omit<Permission, 'createAt' | 'updateAt'>;
