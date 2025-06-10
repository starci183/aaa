import { Module } from '@nestjs/common';
import { KafkaServiceController } from './kafka-service.controller';
import { KafkaServiceService } from './kafka-service.service';
import { ClientsModule } from '@nestjs/microservices/module/clients.module';
import { Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'hero-consumer-2'
          }
        }
      },
    ]), 
  ],
  controllers: [KafkaServiceController],
  providers: [KafkaServiceService],
})
export class KafkaServiceModule {}
