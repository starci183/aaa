import { Controller, Get } from '@nestjs/common';
import { UsersSubgraphService } from './users-subgraph.service';

@Controller()
export class UsersSubgraphController {
  constructor(private readonly usersSubgraphService: UsersSubgraphService) {}

  @Get()
  getHello(): string {
    return this.usersSubgraphService.getHello();
  }
}
