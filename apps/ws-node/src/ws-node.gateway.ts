import { Controller, Get } from '@nestjs/common';
import { WsNodeService } from './ws-node.service';
import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
@WebSocketGateway({
  cors: {
    origin: '*', // Allow all origins for CORS
  },
})
export class WebsocketGateway {
  constructor(private readonly wsNodeService: WsNodeService) {}

  
@SubscribeMessage('ping')
handleEvent(client: Socket, data: string) {
  client.emit('pong', data);
  console.log(`Received ping: ${data}`);
}
}
