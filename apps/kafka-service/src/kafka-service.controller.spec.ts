import { Test, TestingModule } from '@nestjs/testing';
import { KafkaServiceController } from './kafka-service.controller';
import { KafkaServiceService } from './kafka-service.service';

describe('KafkaServiceController', () => {
  let kafkaServiceController: KafkaServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KafkaServiceController],
      providers: [KafkaServiceService],
    }).compile();

    kafkaServiceController = app.get<KafkaServiceController>(KafkaServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(kafkaServiceController.getHello()).toBe('Hello World!');
    });
  });
});
