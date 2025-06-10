import { Injectable } from '@nestjs/common';

@Injectable()
export class KafkaTestService {
  getHello(): string {
    return 'Hello World!';
  }
}
