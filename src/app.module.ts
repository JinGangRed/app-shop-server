import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { AccountModule } from './modules/account/account.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { PermissionModule } from './modules/permission/permission.module';
import { RoleModule } from './modules/role/role.module';

import { configuration } from '@/configurations';

const loadEnvFile = () => {
  const envFile = [`.env.${process.env.NODE_ENV}`, '.env'];
  return envFile;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: loadEnvFile(),
      load: [configuration],
    }),
    DatabaseModule,
    AccountModule,
    AuthModule,
    RoleModule,
    PermissionModule,
  ],

  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware);
  }
}
