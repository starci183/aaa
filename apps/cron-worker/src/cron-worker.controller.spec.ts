import { Test, TestingModule } from '@nestjs/testing';
import { CronWorkerController } from './cron-worker.controller';
import { CronWorkerService } from './cron-worker.worker';

describe('CronWorkerController', () => {
  let cronWorkerController: CronWorkerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CronWorkerController],
      providers: [CronWorkerService],
    }).compile();

    cronWorkerController = app.get<CronWorkerController>(CronWorkerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cronWorkerController.getHello()).toBe('Hello World!');
    });
  });
});
