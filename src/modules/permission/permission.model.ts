import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { ExculdeTrackType, Permission } from '@/types/entities';

export type CreatePermissionDTO = ExculdeTrackType<Permission>;

export type UpdatePermissionDTO = Partial<CreatePermissionDTO>;

export type QueryPermissionDTO = Partial<CreatePermissionDTO>;

export const PermissionProvider = getProviderByTypegooseClass(Permission);
