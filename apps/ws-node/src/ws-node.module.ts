import { Module } from '@nestjs/common';
import { WebsocketGateway } from './ws-node.gateway';
import { WsNodeService } from './ws-node.service';

@Module({
  imports: [],
  controllers: [],
  providers: [WsNodeService, WebsocketGateway],
})
export class WsNodeModule {}
