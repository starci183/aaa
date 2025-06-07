import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    // import cái client module để có thể gọi đến service A
    ClientsModule.registerAsync([
      {
        imports: [],
        name: 'MATH_SERVICE',
        // sử dụng factory để cấu hình client
        useFactory: async () => ({
          transport: Transport.GRPC,
          options: {
            url: "0.0.0.0:3005",
            package: 'service_a',
            protoPath: join(process.cwd(), "proto/service_a.proto"), // Đường dẫn đến file proto
          },
        }),
      },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
