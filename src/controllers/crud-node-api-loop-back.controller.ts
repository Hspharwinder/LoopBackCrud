import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Bookstores} from '../models';
import {BookstoresRepository} from '../repositories';

export class CrudNodeApiLoopBackController {
  constructor(
    @repository(BookstoresRepository)
    public bookstoresRepository : BookstoresRepository,
  ) {}

  @post('/bookstores', {
    responses: {
      '200': {
        description: 'Bookstores model instance',
        content: {'application/json': {schema: getModelSchemaRef(Bookstores)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bookstores, {
            title: 'NewBookstores',
            exclude: ['_id'],
          }),
        },
      },
    })
    bookstores: Omit<Bookstores, '_id'>,
  ): Promise<Bookstores> {
    return this.bookstoresRepository.create(bookstores);
  }

  @get('/bookstores/count', {
    responses: {
      '200': {
        description: 'Bookstores model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Bookstores)) where?: Where<Bookstores>,
  ): Promise<Count> {
    return this.bookstoresRepository.count(where);
  }

  @get('/bookstores', {
    responses: {
      '200': {
        description: 'Array of Bookstores model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Bookstores, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Bookstores)) filter?: Filter<Bookstores>,
  ): Promise<Bookstores[]> {
    return this.bookstoresRepository.find(filter);
  }

  @patch('/bookstores', {
    responses: {
      '200': {
        description: 'Bookstores PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bookstores, {partial: true}),
        },
      },
    })
    bookstores: Bookstores,
    @param.query.object('where', getWhereSchemaFor(Bookstores)) where?: Where<Bookstores>,
  ): Promise<Count> {
    return this.bookstoresRepository.updateAll(bookstores, where);
  }

  @get('/bookstores/{id}', {
    responses: {
      '200': {
        description: 'Bookstores model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Bookstores, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Bookstores)) filter?: Filter<Bookstores>
  ): Promise<Bookstores> {
    return this.bookstoresRepository.findById(id, filter);
  }

  @patch('/bookstores/{id}', {
    responses: {
      '204': {
        description: 'Bookstores PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bookstores, {partial: true}),
        },
      },
    })
    bookstores: Bookstores,
  ): Promise<void> {
    await this.bookstoresRepository.updateById(id, bookstores);
  }

  @put('/bookstores/{id}', {
    responses: {
      '204': {
        description: 'Bookstores PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() bookstores: Bookstores,
  ): Promise<void> {
    await this.bookstoresRepository.replaceById(id, bookstores);
  }

  @del('/bookstores/{id}', {
    responses: {
      '204': {
        description: 'Bookstores DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.bookstoresRepository.deleteById(id);
  }
}
