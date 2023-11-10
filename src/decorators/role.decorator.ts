import { ROLE_KEYS } from '@/constants/decorators.constants';
import { SetMetadata } from '@nestjs/common';

export const Role = (...args: string[]) => SetMetadata(ROLE_KEYS, args);
