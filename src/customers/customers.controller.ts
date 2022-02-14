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

    @Get('user/:username')
    findbyUsername(@Param('username') username: string): string {
        return `This action find customer with username: ${username}`
    }

    @Post()
    create(): string {
        return 'This creates a new customer'
    }
}
