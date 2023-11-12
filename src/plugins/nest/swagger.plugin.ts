import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import envConstants from '@/constants/env.constants';

const setupSwagger = (app: INestApplication, config: ConfigService) => {
  const options = new DocumentBuilder()
    .setTitle(config.get(envConstants.swaggerTitle))
    .setDescription(config.get(envConstants.swaggerDescription))
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(
    config.get(envConstants.swaggerSetupPath),
    app,
    document,
    {
      swaggerOptions: {
        useGlobalPrefix: true,
      },
      explorer: true,
    },
  );
};
export default setupSwagger;
