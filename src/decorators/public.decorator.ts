import { IS_PUBLIC_KEY } from '@/constants/decorators.constants';
import { SetMetadata } from '@nestjs/common';

export const Public = (...args: string[]) => SetMetadata(IS_PUBLIC_KEY, args);
