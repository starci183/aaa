import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { Queue } from 'bullmq';

@Injectable()
export class CronSchedulerService {
  constructor(
    @InjectQueue('math') private mathQueue: Queue
  ) {
    // Constructor có thể để trống nếu không cần khởi tạo gì đặc biệt
  }
  // ko xử lý logic, mà giao cho mấy thằng đệ tử xử lý
  @Interval(100) // 0.01s chạy 1 lần
  handleCron() {
    // Gửi một job vào hàng đợi 'math' để xử lý
    this.mathQueue.add('mathJob', {
      // Dữ liệu có thể được truyền vào job nếu cần
      data: {
        message: 'This is a math job',
      },
    });
    console.log(`Cron job executed at ${new Date().toISOString()}. Job added to queue.`);
    // let sum = 0
    // for (let i = 0; i < Math.floor(Math.random() * 1000); i++) {
    //   // Giả lập công việc nặng
    //   sum += Math.sqrt(i);
    // }
    // console.log(`Cron job executed at ${new Date().toISOString()}. Sum: ${sum}`);
  }
}
