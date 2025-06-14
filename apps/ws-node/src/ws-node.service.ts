import { Injectable } from '@nestjs/common';

@Injectable()
export class WsNodeService {
  getHello(): string {
    return 'Hello World!';
  }
}
