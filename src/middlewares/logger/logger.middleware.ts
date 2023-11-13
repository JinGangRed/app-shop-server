import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import {Request,Response,NextFunction} from "express"

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}
  use(req: Request, res: Response, next:NextFunction) {
    const startDate = new Date();
    next();
    const endDate = new Date();
    this.logger.log(`Request URL:${req.originalUrl},Response:${res.json()}, sendTimes:${endDate.getTime() - startDate.getDate() }`)
  }
}
