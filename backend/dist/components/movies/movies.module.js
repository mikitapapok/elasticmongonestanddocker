"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesModule = void 0;
const common_1 = require("@nestjs/common");
const movies_service_1 = require("./movies.service");
const movies_controller_1 = require("./movies.controller");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const config_1 = require("@nestjs/config");
let MoviesModule = class MoviesModule {
};
MoviesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            elasticsearch_1.ElasticsearchModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    node: 'https://mikitapapok.es.us-central1.gcp.cloud.es.io/',
                    auth: {
                        username: 'elastic',
                        password: '2Wbb0XAHyuLmBlV5YM8rkjLv',
                    },
                    maxRetries: configService.get('ELASTIC_MAX_RETRIES'),
                    requestTimeout: configService.get('ELASTIC_REQ_TIMEOUT'),
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [movies_controller_1.MoviesController],
        providers: [movies_service_1.MoviesService],
    })
], MoviesModule);
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module.js.map