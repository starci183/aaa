import { NestFactory } from '@nestjs/core';
import { KafkaServiceModule } from './kafka-service.module';

async function bootstrap() {
  const app = await NestFactory.create(KafkaServiceModule);
  await app.listen(3000);
}
bootstrap();
