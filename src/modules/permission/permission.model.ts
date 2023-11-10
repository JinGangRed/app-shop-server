import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { Permission } from '@/types/entities/permission';

export const PermissionProvider = getProviderByTypegooseClass(Permission);
