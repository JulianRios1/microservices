import { NestFactory } from '@nestjs/core';
import { TaksServiceModule } from './taks-service.module';

async function bootstrap() {
  const app = await NestFactory.create(TaksServiceModule);
  await app.listen(3000);
}
bootstrap();
