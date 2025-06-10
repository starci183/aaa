import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersSubgraphService {
  getHello(): string {
    return 'Hello World!';
  }
}
