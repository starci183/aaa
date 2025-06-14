import { NestFactory } from '@nestjs/core';
import { WsNodeModule } from './ws-node.module';

async function bootstrap() {
  const app = await NestFactory.create(WsNodeModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
