import { Module } from '@nestjs/common';
import { MathConsumer } from './cron-worker.worker';
import { BullModule } from '@nestjs/bullmq'; // Import BullModule for job scheduling

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
          host: 'localhost',
          port: 6379,
        },
      }),
      BullModule.registerQueue({
    name: 'math',
  })],
  controllers: [],
  providers: [MathConsumer],
})
export class CronWorkerModule {}
