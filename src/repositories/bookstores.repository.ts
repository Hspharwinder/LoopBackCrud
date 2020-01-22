import {DefaultCrudRepository} from '@loopback/repository';
import {Bookstores, BookstoresRelations} from '../models';
import {MongoDbBookStoresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BookstoresRepository extends DefaultCrudRepository<
  Bookstores,
  typeof Bookstores.prototype._id,
  BookstoresRelations
> {
  constructor(
    @inject('datasources.MongoDbBookStores') dataSource: MongoDbBookStoresDataSource,
  ) {
    super(Bookstores, dataSource);
  }
}
