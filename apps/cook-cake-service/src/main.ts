import { NestFactory } from '@nestjs/core';
import { CookCakeServiceModule } from './cook-cake-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CookCakeServiceModule);
  await app.listen(3000);
}
bootstrap();
