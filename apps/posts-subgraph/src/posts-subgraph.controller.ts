import { Controller, Get } from '@nestjs/common';
import { PostsSubgraphService } from './posts-subgraph.service';

@Controller()
export class PostsSubgraphController {
  constructor(private readonly postsSubgraphService: PostsSubgraphService) {}

  @Get()
  getHello(): string {
    return this.postsSubgraphService.getHello();
  }
}
