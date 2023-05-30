import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorHandlerMiddleware } from './error/error';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ErrorHandlerMiddleware());
  app.enableCors();
  await app.listen(3002);
}
bootstrap();
