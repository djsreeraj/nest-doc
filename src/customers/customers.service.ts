import { Injectable } from '@nestjs/common';
import { ICustomer } from 'src/customers/interfaces/customer.interface';

@Injectable()
export class CustomersService {

    private readonly customers: ICustomer[] = [];

    create(customer: ICustomer) {
        return this.customers.push(customer)
    }

    findAll(): ICustomer[] {
        return this.customers;
    }
}
