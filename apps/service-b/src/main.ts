import { NestFactory } from '@nestjs/core';
import { ServiceBModule } from './service-b.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceBModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
