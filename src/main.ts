import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorHandlerMiddleware } from './error/error';

async function bootstrap() {
  const port = 4004;
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ErrorHandlerMiddleware());
  app.enableCors();
  await app.listen(port, () =>
    console.log('Server is listening on port ' + port),
  );
}
bootstrap();
