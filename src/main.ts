import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';

import { AppModule } from './app.module';
import envConstants from './constants/env.constants';
import winstonLogger from './utils/logger';

import setupApp from '@/plugins/nest';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({ instance: winstonLogger }),
  });
  const configService = app.get(ConfigService);
  const port = process.env.PORT || configService.get(envConstants.port) || 3000;

  setupApp(app);

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
