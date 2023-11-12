import { SetMetadata } from '@nestjs/common';

import { IS_PUBLIC_KEY } from '@/constants/decorators.constants';

export const Public = (...args: string[]) => SetMetadata(IS_PUBLIC_KEY, args);
