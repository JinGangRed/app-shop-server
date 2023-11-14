import { HttpStatus } from '@nestjs/common';

export interface HttpResponse<T> {
  data?: T;
  status: HttpStatus;
  message: string;
}
