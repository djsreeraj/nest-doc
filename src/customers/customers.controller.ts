import { Controller, Get, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get()
    findAll(): string {
        return 'This action returns all customers';
    }

    @Post()
    create(): string {
        return 'This creates a new customer'
    }
}
