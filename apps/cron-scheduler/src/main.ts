import { NestFactory } from '@nestjs/core';
import { CronSchedulerModule } from './cron-scheduler.module';

async function bootstrap() {
  // tạo ra 1 ứng dụng NestJS mà không mở port HTTP
  const app = await NestFactory.createApplicationContext(CronSchedulerModule);
  await app.init();
}
bootstrap();
