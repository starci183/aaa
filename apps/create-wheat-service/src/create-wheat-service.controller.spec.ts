import { Test, TestingModule } from '@nestjs/testing';
import { CreateWheatServiceController } from './create-wheat-service.controller';
import { CreateWheatServiceService } from './create-wheat-service.service';

describe('CreateWheatServiceController', () => {
  let createWheatServiceController: CreateWheatServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CreateWheatServiceController],
      providers: [CreateWheatServiceService],
    }).compile();

    createWheatServiceController = app.get<CreateWheatServiceController>(CreateWheatServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(createWheatServiceController.getHello()).toBe('Hello World!');
    });
  });
});
