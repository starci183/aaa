import { Module } from '@nestjs/common';
import { ElasticSearchController } from './elastic-search.controller';
import { ElasticSearchService } from './elastic-search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
@Module({
  imports: [
    ElasticsearchModule.register({
    node: 'http://localhost:9200',
    })
  ],
  controllers: [ElasticSearchController],
  providers: [ElasticSearchService],
})
export class ElasticSearchModule {}
