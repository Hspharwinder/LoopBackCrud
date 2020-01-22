import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Bookstores extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  price: number;

  @property({
    type: 'number',
    default: 0,
  })
  quantity?: number;

  @property({
    type: 'string',
  })
  email?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Bookstores>) {
    super(data);
  }
}

export interface BookstoresRelations {
  // describe navigational properties here
}

export type BookstoresWithRelations = Bookstores & BookstoresRelations;
