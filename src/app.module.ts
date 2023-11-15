import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AccountModule } from './modules/account/account.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { PermissionModule } from './modules/permission/permission.module';
import { RoleModule } from './modules/role/role.module';
import { ProductsModule } from './modules/products/products.module';
import { InitModule } from './modules/init/init.module';

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
    ProductsModule,
    InitModule,
  ],
  providers: [Logger],
  controllers: [],
})
export class AppModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
