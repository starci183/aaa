import { Controller, Get } from '@nestjs/common';
import { CreateWheatServiceService } from './create-wheat-service.service';
import { MessagePattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';

@Controller()
export class CreateWheatServiceController {
  constructor(private readonly createWheatServiceService: CreateWheatServiceService) {}

  @Get()
  getHello(): string {
    return this.createWheatServiceService.getHello();
  }

  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log("Get message from cook-cake-service:", data);
  }
}
