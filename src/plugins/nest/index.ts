import { INestApplication } from '@nestjs/common';
// import compression from 'compression';
import envConstants from '@/constants/env.constants';
import { ConfigService } from '@nestjs/config';
import setupSwagger from './swagger.plugin';
const setupAPP = (app: INestApplication): INestApplication => {
  // app.use(compression());
  const config = app.get(ConfigService);

  app.setGlobalPrefix(config.get(envConstants.appEndpointPrefix));

  setupSwagger(app, config);

  return app;
};
export default setupAPP;
