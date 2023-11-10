import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { Role } from '@/types/entities/role';

export const RoleProvider = getProviderByTypegooseClass(Role);
