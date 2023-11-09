import { isPublic } from '@/constants/decorators.constants';
import { SetMetadata } from '@nestjs/common';

export const Public = (...args: string[]) => SetMetadata(isPublic, args);
