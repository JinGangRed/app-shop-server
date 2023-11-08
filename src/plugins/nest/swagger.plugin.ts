import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const options = new DocumentBuilder().setTitle('Shop API Doc').build();

const setupSwagger = (app: INestApplication) => {
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
};
export default setupSwagger;
