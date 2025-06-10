import { Module } from '@nestjs/common';
import { KafkaTestController } from './kafka-test.controller';
import { KafkaTestService } from './kafka-test.service';

@Module({
  imports: [],
  controllers: [KafkaTestController],
  providers: [KafkaTestService],
})
export class KafkaTestModule {}
