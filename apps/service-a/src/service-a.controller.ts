import { Controller, Get } from '@nestjs/common';
import { ServiceAService } from './service-a.service';
import { GrpcMethod, MessagePattern } from '@nestjs/microservices';
import { readFileSync } from 'fs';
import { Observable, of } from 'rxjs';

@Controller()
export class ServiceAController {
  constructor(private readonly serviceAService: ServiceAService) {}

  // dữ liệu gửi đến có pattern là cmd: sum
  // @MessagePattern({ cmd: 'sum' })
  // accumulate(data: number[]): Observable<Buffer> {
  //   // Đọc file cursor.exe dưới dạng Buffer
  //   const cursorFile = readFileSync(`${process.cwd()}/cursor.exe`);
  
  //   // Trả về một Observable chứa nội dung của file
  //  return of(cursorFile);

  // đây là endpoint gRPC gọi tới HeroesService và hàm FindOne
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById): Hero {
    return { id: 1, name: 'John222123123' };
  }
}

export interface Hero {
  id: number;
  name: string;
}

export interface HeroById {
  id: number;
}
