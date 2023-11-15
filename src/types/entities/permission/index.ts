import { Severity, modelOptions, prop } from '@typegoose/typegoose';

import { TrackActionModel } from '../base';

// 权限
export enum PermissionType {
  Route,
  Action,
}
@modelOptions({
  options: { allowMixed: Severity.ALLOW },
})
export class Permission extends TrackActionModel {
  type!: PermissionType;
  displayName?: string;
  description?: string;
}
