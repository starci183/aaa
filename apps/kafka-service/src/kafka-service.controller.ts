import { Controller, Get, Inject } from '@nestjs/common';
import { KafkaServiceService } from './kafka-service.service';
import { ClientKafkaProxy, ClientProxy } from '@nestjs/microservices';

@Controller()
export class KafkaServiceController {
  constructor(
    private readonly kafkaServiceService: KafkaServiceService,
    @Inject("HERO_SERVICE") private readonly client: ClientKafkaProxy
  ) {
    // You can use the client to communicate with the HERO_SERVICE
    // For example, you can send a message or request data
    // this.client.connect();
  }

  async onModuleInit() {
    this.client.subscribeToResponseOf('hero.kill.dragon');
    await this.client.connect();
  }


  @Get()
  getHello(): string {
    this.client.emit<number>('hero.kill.dragon', [1, 2, 3]);
    return 'Hello from Kafka Service!';
    //return this.kafkaServiceService.getHello();
  }
}
