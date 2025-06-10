import { Module } from '@nestjs/common';
import { CreateWheatServiceController } from './create-wheat-service.controller';
import { CreateWheatServiceService } from './create-wheat-service.service';

@Module({
  imports: [],
  controllers: [CreateWheatServiceController],
  providers: [CreateWheatServiceService],
})
export class CreateWheatServiceModule {}
