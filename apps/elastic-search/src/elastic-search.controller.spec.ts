import { Test, TestingModule } from '@nestjs/testing';
import { ElasticSearchController } from './elastic-search.controller';
import { ElasticSearchService } from './elastic-search.service';

describe('ElasticSearchController', () => {
  let elasticSearchController: ElasticSearchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ElasticSearchController],
      providers: [ElasticSearchService],
    }).compile();

    elasticSearchController = app.get<ElasticSearchController>(ElasticSearchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(elasticSearchController.getHello()).toBe('Hello World!');
    });
  });
});
