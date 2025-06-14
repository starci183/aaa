import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('math')
export class MathConsumer extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    let sum = 0;
    for (let i = 0; i < Math.floor(Math.random() * 1000); i++) {
    //   // Giả lập công việc nặng
      sum += Math.sqrt(i);
    }
    console.log(`Sum: ${sum}`);
  }
}