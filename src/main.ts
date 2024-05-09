import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { envs } from './config';
import { CustomExceptionFilter } from './common';

async function bootstrap() {
  const logger = new Logger('GATEWAY-MAIN');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve todo lo que no está incluído en los DTOs
      forbidNonWhitelisted: true, // Retorna bad request si hay propiedades en el objeto no requeridas
    }),
  );
  app.useGlobalFilters(new CustomExceptionFilter());

  await app.listen(envs.PORT);
  logger.debug(`GATEWAY-MS runing on PORT ${envs.PORT}`);
}
bootstrap();
