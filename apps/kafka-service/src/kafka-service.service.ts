import { Injectable } from '@nestjs/common';

@Injectable()
export class KafkaServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
