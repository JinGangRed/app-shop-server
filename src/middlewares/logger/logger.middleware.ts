import { Injectable, NestMiddleware } from '@nestjs/common';
import { Logger } from 'winston';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}
  use(req: any, res: any, next: () => void) {
    next();
  }
}
