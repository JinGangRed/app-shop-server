import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '@/configurations';
import { DatabaseModule } from './modules/database/database.module';
import { AccountModule } from './modules/account/account.module';

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
export class AppModule {}
