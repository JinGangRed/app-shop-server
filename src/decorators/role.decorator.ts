import { SetMetadata } from '@nestjs/common';

import { ROLE_KEYS } from '@/constants/decorators.constants';

export const Role = (...args: string[]) => SetMetadata(ROLE_KEYS, args);
