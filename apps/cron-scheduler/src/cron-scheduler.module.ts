import { Module } from '@nestjs/common';
import { CronSchedulerService } from './cron-scheduler.service';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bullmq'; // Import BullModule for job scheduling
@Module({
  imports: [
    ScheduleModule.forRoot(), // Import ScheduleModule to enable cron jobs,BullModule.forRoot({
    BullModule.forRoot({
    connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
  name: 'math',
})
  ],
  controllers: [],
  providers: [CronSchedulerService],
})
export class CronSchedulerModule {}
