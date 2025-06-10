import { NestFactory } from '@nestjs/core';
import { KafkaTestModule } from './kafka-test.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
   const app = await NestFactory.createMicroservice<MicroserviceOptions>(KafkaTestModule, {
    transport: Transport.KAFKA,
    options: {
    client: {
      brokers: ['localhost:9092'],
    }
  }
  });
  await app.listen();
}
bootstrap();
