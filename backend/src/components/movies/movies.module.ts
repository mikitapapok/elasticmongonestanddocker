import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        node: 'https://mikitapapok.es.us-central1.gcp.cloud.es.io/',
        auth: {
          username: 'elastic',
          password: '2Wbb0XAHyuLmBlV5YM8rkjLv',
        },
        maxRetries: configService.get('ELASTIC_MAX_RETRIES'),
        requestTimeout: configService.get('ELASTIC_REQ_TIMEOUT'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
