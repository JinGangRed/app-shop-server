import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
// import setupApp from './plugins';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  console.log('process.env', process.env.PORT);

  console.log('configService', configService.get('port'));
  // setupApp(app);
  await app.listen(3000);
}
bootstrap();
