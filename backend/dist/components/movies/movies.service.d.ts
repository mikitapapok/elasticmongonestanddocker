import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ConfigService } from '@nestjs/config';
export declare class MoviesService {
    private esService;
    private configService;
    constructor(esService: ElasticsearchService, configService: ConfigService);
    create(createMovieDto: CreateMovieDto): string;
    findAll(): Promise<void>;
    findOne(id: number): string;
    update(id: number, updateMovieDto: UpdateMovieDto): string;
    remove(id: number): string;
}
