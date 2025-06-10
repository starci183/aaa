import { Test, TestingModule } from '@nestjs/testing';
import { KafkaTestController } from './kafka-test.controller';
import { KafkaTestService } from './kafka-test.service';

describe('KafkaTestController', () => {
  let kafkaTestController: KafkaTestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KafkaTestController],
      providers: [KafkaTestService],
    }).compile();

    kafkaTestController = app.get<KafkaTestController>(KafkaTestController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(kafkaTestController.getHello()).toBe('Hello World!');
    });
  });
});
