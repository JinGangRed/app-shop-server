import { INestApplication } from '@nestjs/common';
// import compression from 'compression';
import setupSwagger from './swagger.plugin';
const setupAPP = (app: INestApplication): INestApplication => {
  // app.use(compression());
  setupSwagger(app);
  return app;
};
export default setupAPP;
