import { Count, Filter, Where } from '@loopback/repository';
import { Bookstores } from '../models';
import { BookstoresRepository } from '../repositories';
export declare class CrudNodeApiLoopBackController {
    bookstoresRepository: BookstoresRepository;
    constructor(bookstoresRepository: BookstoresRepository);
    create(bookstores: Omit<Bookstores, '_id'>): Promise<Bookstores>;
    count(where?: Where<Bookstores>): Promise<Count>;
    find(filter?: Filter<Bookstores>): Promise<Bookstores[]>;
    updateAll(bookstores: Bookstores, where?: Where<Bookstores>): Promise<Count>;
    findById(id: string, filter?: Filter<Bookstores>): Promise<Bookstores>;
    updateById(id: string, bookstores: Bookstores): Promise<void>;
    replaceById(id: string, bookstores: Bookstores): Promise<void>;
    deleteById(id: string): Promise<void>;
}
