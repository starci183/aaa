import { Controller, Get, Inject } from '@nestjs/common';
import { CookCakeServiceService } from './cook-cake-service.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class CookCakeServiceController {
  constructor(
    private readonly cookCakeServiceService: CookCakeServiceService,
    @Inject('MATH_SERVICE') private client: ClientProxy,
  ) {
    // You can use the client to communicate with the MATH_SERVICE
    // For example, you can send a message or request data
    this.client.connect()
  }

  @Get()
  getHello(): string {
    //return this.cookCakeServiceService.getHello();
    this.client.emit<number>('notifications', [1, 2, 3]);
    return 'Hello from Cook Cake Service!';
  }
}
