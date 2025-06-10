import { NestFactory } from '@nestjs/core';
import { ElasticSearchModule } from './elastic-search.module';

async function bootstrap() {
  const app = await NestFactory.create(ElasticSearchModule);
  await app.listen(3000);
}
bootstrap();
