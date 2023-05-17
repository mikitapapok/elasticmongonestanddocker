import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class AppService {
  constructor(private esService: ElasticsearchService) {}

  async getHello() {
    const response = await this.esService.search({
      index: 'not_my_movies',
      body: {
        size: 20,

        aggs: {
          by_language: {
            terms: {
              field: 'status',
              size: 100,
            },
          },
        },
      },
    });

    const hits = response.aggregations;
    return hits;

    // const response = await this.esService.search({
    //   index: 'not_my_movies',
    //   body: {
    //     size: 20,

    //     aggs: {
    //       by_language: {
    //         terms: {
    //           field: 'status',
    //           size: 100,
    //         },
    //       },
    //     },
    //   },
    // });
    // const hits = response.aggregations;
    // return hits;   //
    // const response = await this.esService.search({
    //   index: 'not_my_movies',
    //   body: {
    //     query: {
    //       match: {
    //         title: {
    //           query: 'hard',
    //         },
    //       },
    //     },
    //   },
    // });
    //
    // const hit = response.hits.hits;
    // return hit;
  }
}
