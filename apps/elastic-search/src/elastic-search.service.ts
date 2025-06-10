import { Injectable } from '@nestjs/common';

@Injectable()
export class ElasticSearchService {
  getHello(): string {
    return 'Hello World!';
  }
}
