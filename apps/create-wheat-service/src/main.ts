import { NestFactory } from '@nestjs/core';
import { CreateWheatServiceModule } from './create-wheat-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // biến con service này thành 1 con microservice chạy dựa trên RabbitMQ
  // con này là BOT - tức là nó sẽ lắng nghe các message từ RabbitMQ và xử lý chúng
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CreateWheatServiceModule, {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'cats_queue',
    queueOptions: {
      durable: false
    },
  },
});
  await app.listen();
}
bootstrap();
