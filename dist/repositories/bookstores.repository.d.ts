import { DefaultCrudRepository } from '@loopback/repository';
import { Bookstores, BookstoresRelations } from '../models';
import { MongoDbBookStoresDataSource } from '../datasources';
export declare class BookstoresRepository extends DefaultCrudRepository<Bookstores, typeof Bookstores.prototype._id, BookstoresRelations> {
    constructor(dataSource: MongoDbBookStoresDataSource);
}
