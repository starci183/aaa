import { Controller, Get, Inject } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';

@Controller()
export class ApiGatewayController {
  private herosService: HeroesService; 
  constructor(
    @Inject('MATH_SERVICE') private client: ClientGrpc
  ) {}
  onModuleInit() {
    this.herosService = this.client.getService<HeroesService>('HeroesService');
  }

  @Get()
  getHello(): Promise<string> {
    return lastValueFrom(this.herosService.findOne({
      id: 1
    }));
  }

  // api để các em call vào endpoit và enpoit này call tới service A
  // @Get('sum')
  // async accumulate(): Promise<number | undefined> {
  //   // rsjx - observable - trả về 1 stream chứa data
  //   // Gọi đến service A để thực hiện tính toán
  //   // lastFromValue -> kết quả cuối của stream đấy
  //   const stream = this.client.send<number>({ cmd: 'sum' }, [1, 2, 3, 4, 5]);
  //   // cứ 0.1s trả về stream đấy, dòng chảy dữ liệ, trả về từ từ
  //   // lastValueFrom -> lấy giá trị cuối cùng của stream đấy

  //   // tại sao anh cường không lấy kết quả cuối mà cố tình giải thích cái này làm gì?
  //   // ví dụ các em làm việc với file có dung lượng lớn thì sao
  //   stream.subscribe({
  //   next: (data) => {
  //     console.log('Received chunk:', data);
  //   },
  //   complete: () => {
  //     console.log('Stream complete');
  //   },
  // });

  // // Lấy giá trị cuối cùng (tổng)
  // return lastValueFrom(stream);
  // }
}
// interface tự định nghĩa, nó trùng với định nghĩa trong file proto
interface HeroesService {
  findOne(data: { id: number }): Observable<any>;
}