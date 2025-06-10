import { Test, TestingModule } from '@nestjs/testing';
import { PostsSubgraphController } from './posts-subgraph.controller';
import { PostsSubgraphService } from './posts-subgraph.service';

describe('PostsSubgraphController', () => {
  let postsSubgraphController: PostsSubgraphController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostsSubgraphController],
      providers: [PostsSubgraphService],
    }).compile();

    postsSubgraphController = app.get<PostsSubgraphController>(PostsSubgraphController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(postsSubgraphController.getHello()).toBe('Hello World!');
    });
  });
});
