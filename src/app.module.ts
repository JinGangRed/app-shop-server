import { configuration } from '@/configurations';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { AccountModule } from './modules/account/account.module';
import { DatabaseModule } from './modules/database/database.module';

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
  ],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware);
  }
}
