import { Injectable } from '@nestjs/common';

@Injectable()
export class CookCakeServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
