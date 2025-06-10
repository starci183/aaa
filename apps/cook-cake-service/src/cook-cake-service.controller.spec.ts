import { Test, TestingModule } from '@nestjs/testing';
import { CookCakeServiceController } from './cook-cake-service.controller';
import { CookCakeServiceService } from './cook-cake-service.service';

describe('CookCakeServiceController', () => {
  let cookCakeServiceController: CookCakeServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CookCakeServiceController],
      providers: [CookCakeServiceService],
    }).compile();

    cookCakeServiceController = app.get<CookCakeServiceController>(CookCakeServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cookCakeServiceController.getHello()).toBe('Hello World!');
    });
  });
});
