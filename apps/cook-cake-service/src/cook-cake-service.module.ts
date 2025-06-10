import { Module } from '@nestjs/common';
import { CookCakeServiceController } from './cook-cake-service.controller';
import { CookCakeServiceService } from './cook-cake-service.service';
import { ClientsModule } from '@nestjs/microservices/module/clients.module';
import { Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'cats_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [CookCakeServiceController],
  providers: [CookCakeServiceService],
})
export class CookCakeServiceModule {}
