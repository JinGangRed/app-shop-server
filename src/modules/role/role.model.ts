import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { ReplaceRef, ExculdeTrackType, Role } from '@/types/entities';

export type CreateRoleDTO = ReplaceRef<ExculdeTrackType<Role>>;

export type UpdateRoleDto = Partial<CreateRoleDTO>;

export type QueryRoleDto = Partial<CreateRoleDTO>;

export const RoleProvider = getProviderByTypegooseClass(Role);
