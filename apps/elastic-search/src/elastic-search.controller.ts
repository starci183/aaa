import { Controller, Get, OnModuleInit, Query } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { faker } from '@faker-js/faker'; // Using Vietnamese locale for more realistic local data

@Controller()
export class ElasticSearchController implements OnModuleInit {
  constructor(
    private readonly elasticsearchService: ElasticsearchService
  ) {}
  
  async onModuleInit() {
    console.log('ElasticSearchController initialized');
    await this.generateFakeData();
  }

  @Get()
  getHello(): string {
    return 'ElasticSearch Controller is running';
  }

  private async generateFakeData() {
    try {
      // Check if index exists or create it
      // try to delete the index if it exists
        await this.elasticsearchService.indices.delete({
          index: 'user_profiles',
          ignore_unavailable: true,
          allow_no_indices: true
        });
      // // c  reate the index
      const indexName = 'user_profiles';
      const indexExists = await this.elasticsearchService.indices.exists({
        index: indexName
      });

      if (!indexExists) {
        await this.elasticsearchService.indices.create({
          index: indexName,
        });
      }

      // Generate 200 fake records
      const educationLevels = ['High School', 'College', 'Bachelor', 'Master', 'PhD'];
      const body: Array<any> = [];

        for (let j = 0; j < 2000; j++) {
          const record = {
            username: faker.internet.username(),
            hometown: `${faker.location.city()}, ${faker.location.state()}`,
            age: faker.number.int({ min: 18, max: 80 }),
            education: faker.helpers.arrayElement(educationLevels),
            timestamp: new Date()
          };
          // Add action metadata and document to the bulk body
          body.push({ index: { _index: indexName } });
          body.push(record);
        }

      await this.elasticsearchService.bulk({
        body
      });

      console.log('Finished generating 2000 fake records');
    } catch (error) {
      console.error('Error generating fake data:', error);
    }
  }

  @Get('search')
async search(@Query('q') query: string) {
  // Kiểm tra nếu không có chuỗi tìm kiếm được truyền vào
  if (!query) {
    return { message: 'Query string (q) là bắt buộc' };
  }

  try {
    const result = await this.elasticsearchService.search({
      index: 'user_profiles', // Tên chỉ mục trong Elasticsearch
      query: {
          bool: {
            should: [ // Sử dụng mảng "should" để kết hợp nhiều điều kiện tìm kiếm
              {
                match: {
                  username: {
                    query: query,
                    fuzziness: 'AUTO', // tự động xác định khoảng cách sai
                    operator: 'and',
                    boost: 2.0 // tăng độ ưu tiên cho kết quả này
                  },
                },
              },
              {
                wildcard: {
                  username: {
                    value: `*${query.toLowerCase()}*`, // Tìm chuỗi xuất hiện ở bất kỳ đâu trong username
                    boost: 0.5, // Độ ưu tiên thấp hơn so với match
                  },
                },
              },
              {
                prefix: {
                  username: {
                    value: query.toLowerCase(), // Tìm username bắt đầu bằng chuỗi nhập vào
                    boost: 0.3, // Ưu tiên thấp hơn một chút
                  },
                },
              },
            ],
            minimum_should_match: 1, // Chỉ cần 1 trong các điều kiện "should" đúng là được
          },
        },
    });

    // Trả về danh sách kết quả (chỉ phần _source, không bao gồm metadata)
    return result.hits.hits.map(hit => hit._source);
  } catch (error) {
    console.error('Lỗi khi tìm kiếm dữ liệu:', error);
    throw error;
  }
}
}