import { ExculdeTrackType, TrackActionModel } from '../base';

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

export type CreatePermissionDTO = ExculdeTrackType<Permission>;

export type UpdatePermissionDTO = Partial<CreatePermissionDTO>;

export type QueryPermissionDTO = Partial<CreatePermissionDTO>;
