import { NestFactory } from '@nestjs/core';
import { PostsSubgraphModule } from './posts-subgraph.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsSubgraphModule);
  await app.listen(process.env.port ?? 7001);
}
bootstrap();
