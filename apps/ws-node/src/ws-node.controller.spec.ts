import { Test, TestingModule } from '@nestjs/testing';
import { WsNodeController } from './ws-node.gateway';
import { WsNodeService } from './ws-node.service';

describe('WsNodeController', () => {
  let wsNodeController: WsNodeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WsNodeController],
      providers: [WsNodeService],
    }).compile();

    wsNodeController = app.get<WsNodeController>(WsNodeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(wsNodeController.getHello()).toBe('Hello World!');
    });
  });
});
