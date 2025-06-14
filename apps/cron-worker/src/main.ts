import { NestFactory } from '@nestjs/core';
import { CronWorkerModule } from './cron-worker.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(CronWorkerModule);
  await app.init();
}
bootstrap();
