import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ConfigService } from '@nestjs/config';
import { matches } from 'class-validator';

@Injectable()
export class MoviesService {
  constructor(
    private esService: ElasticsearchService,
    private configService: ConfigService,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  async findAll() {
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
    // return hits;
    //
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

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
