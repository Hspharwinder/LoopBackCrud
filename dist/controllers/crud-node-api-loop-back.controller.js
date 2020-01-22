"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CrudNodeApiLoopBackController = class CrudNodeApiLoopBackController {
    constructor(bookstoresRepository) {
        this.bookstoresRepository = bookstoresRepository;
    }
    async create(bookstores) {
        return this.bookstoresRepository.create(bookstores);
    }
    async count(where) {
        return this.bookstoresRepository.count(where);
    }
    async find(filter) {
        return this.bookstoresRepository.find(filter);
    }
    async updateAll(bookstores, where) {
        return this.bookstoresRepository.updateAll(bookstores, where);
    }
    async findById(id, filter) {
        return this.bookstoresRepository.findById(id, filter);
    }
    async updateById(id, bookstores) {
        await this.bookstoresRepository.updateById(id, bookstores);
    }
    async replaceById(id, bookstores) {
        await this.bookstoresRepository.replaceById(id, bookstores);
    }
    async deleteById(id) {
        await this.bookstoresRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/bookstores', {
        responses: {
            '200': {
                description: 'Bookstores model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Bookstores) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Bookstores, {
                    title: 'NewBookstores',
                    exclude: ['_id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrudNodeApiLoopBackController.prototype, "create", null);
__decorate([
    rest_1.get('/bookstores/count', {
        responses: {
            '200': {
                description: 'Bookstores model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Bookstores))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrudNodeApiLoopBackController.prototype, "count", null);
__decorate([
    rest_1.get('/bookstores', {
        responses: {
            '200': {
                description: 'Array of Bookstores model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Bookstores, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Bookstores))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrudNodeApiLoopBackController.prototype, "find", null);
__decorate([
    rest_1.patch('/bookstores', {
        responses: {
            '200': {
                description: 'Bookstores PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Bookstores, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Bookstores))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Bookstores, Object]),
    __metadata("design:returntype", Promise)
], CrudNodeApiLoopBackController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/bookstores/{id}', {
        responses: {
            '200': {
                description: 'Bookstores model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Bookstores, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Bookstores))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CrudNodeApiLoopBackController.prototype, "findById", null);
__decorate([
    rest_1.patch('/bookstores/{id}', {
        responses: {
            '204': {
                description: 'Bookstores PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Bookstores, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Bookstores]),
    __metadata("design:returntype", Promise)
], CrudNodeApiLoopBackController.prototype, "updateById", null);
__decorate([
    rest_1.put('/bookstores/{id}', {
        responses: {
            '204': {
                description: 'Bookstores PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Bookstores]),
    __metadata("design:returntype", Promise)
], CrudNodeApiLoopBackController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/bookstores/{id}', {
        responses: {
            '204': {
                description: 'Bookstores DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrudNodeApiLoopBackController.prototype, "deleteById", null);
CrudNodeApiLoopBackController = __decorate([
    __param(0, repository_1.repository(repositories_1.BookstoresRepository)),
    __metadata("design:paramtypes", [repositories_1.BookstoresRepository])
], CrudNodeApiLoopBackController);
exports.CrudNodeApiLoopBackController = CrudNodeApiLoopBackController;
//# sourceMappingURL=crud-node-api-loop-back.controller.js.map