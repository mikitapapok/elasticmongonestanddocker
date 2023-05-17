import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'https://mikitapapok.es.us-central1.gcp.cloud.es.io/',
      auth: {
        username: 'elastic',
        password: '2Wbb0XAHyuLmBlV5YM8rkjLv',
      },
      maxRetries: 10,
      requestTimeout: 50000,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
