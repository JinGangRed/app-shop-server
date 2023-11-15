import {
  CallHandler,
  ContextType,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Response } from 'express';

import { HttpResponse } from '@/types/http/response';
// const whiteList: string[] = ['/graphql', '/swagger'];
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return this.isHttpHandler(context)
      ? this.handleRestfulResponse(context, next)
      : this.handleGraphqlResponse(context, next);
  }

  private handleRestfulResponse(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<HttpResponse<any>> {
    const statusCode = context
      .switchToHttp()
      .getResponse<Response>().statusCode;
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          status: statusCode,
          message: 'Success',
        } as HttpResponse<any>;
      }),
    );
  }

  private handleGraphqlResponse(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<HttpResponse<any>> {
    const ctx = GqlExecutionContext.create(context);
    return next.handle().pipe(
      map((response) => {
        return {
          data: response.data,
          status: ctx.getContext().response.statusCode,
          message: 'Success',
        } as HttpResponse<any>;
      }),
    );
  }

  private isHttpHandler(context: ExecutionContext) {
    return context.getType<ContextType>() === 'http';
  }
}
