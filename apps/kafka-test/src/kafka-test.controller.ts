import { Controller, Get } from '@nestjs/common';
import { KafkaTestService } from './kafka-test.service';
import { Ctx, EventPattern, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaTestController {
  constructor(private readonly kafkaTestService: KafkaTestService) {}

  
@EventPattern('hero.kill.dragon')
killDragon(@Payload() message: KillDragonMessage, @Ctx() context: KafkaContext) {
  console.log(`Topic: ${context.getTopic()}`);
  console.log(`Partition: ${context.getPartition()}`);
  console.log(`Message: ${JSON.stringify(message)}`);
}
}

export interface KillDragonMessage {
  heroId: string;
  dragonId: string;
  timestamp: string;
}
