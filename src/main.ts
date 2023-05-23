import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 4004;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3002);
}
bootstrap();
