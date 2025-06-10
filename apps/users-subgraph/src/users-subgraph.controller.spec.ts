import { Test, TestingModule } from '@nestjs/testing';
import { UsersSubgraphController } from './users-subgraph.controller';
import { UsersSubgraphService } from './users-subgraph.service';

describe('UsersSubgraphController', () => {
  let usersSubgraphController: UsersSubgraphController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersSubgraphController],
      providers: [UsersSubgraphService],
    }).compile();

    usersSubgraphController = app.get<UsersSubgraphController>(UsersSubgraphController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(usersSubgraphController.getHello()).toBe('Hello World!');
    });
  });
});
