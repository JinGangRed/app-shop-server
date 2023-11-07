import { INestApplication } from '@nestjs/common';
import compression from 'compression';
const setupAPP = (app: INestApplication): INestApplication => {
  app.use(compression());
  return app;
};
export default setupAPP;
