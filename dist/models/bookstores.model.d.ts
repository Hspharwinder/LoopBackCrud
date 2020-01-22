import { Entity } from '@loopback/repository';
export declare class Bookstores extends Entity {
    _id?: string;
    name: string;
    price: number;
    quantity?: number;
    email?: string;
    [prop: string]: any;
    constructor(data?: Partial<Bookstores>);
}
export interface BookstoresRelations {
}
export declare type BookstoresWithRelations = Bookstores & BookstoresRelations;
