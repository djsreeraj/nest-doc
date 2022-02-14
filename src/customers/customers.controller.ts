import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get()
    findAll(): string {
        return 'This action returns all customers';
    }

    @Get(':id')
    findbyId(@Param() params): string {
        return `This action find customer with id: #${params.id}`
    }

    @Post()
    create(): string {
        return 'This creates a new customer'
    }
}
