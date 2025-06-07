import { NestFactory } from '@nestjs/core';
import { ServiceAModule } from './service-a.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServiceAModule,
    {
      // mirocservie này nó cho phép kết nối thông qua TCP
      // mirocserive này sẽ nằm ở service chứ không phải ở gateway
      transport: Transport.GRPC,
      options: {
        url: "0.0.0.0:3005",
        // package tên là servie a
        package: 'service_a',
        // đường dẫn đến file proto
        // file proto
        protoPath: join(process.cwd(), 'proto/service_a.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();