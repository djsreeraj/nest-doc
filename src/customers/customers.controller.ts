import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ICustomer } from 'src/customers/interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) { }

    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto) {
        this.customersService.create(createCustomerDto)
    }

    @Get()
    async findAll(): Promise<ICustomer[]> {
        return this.customersService.findAll();
    }



    // @Get()
    // findAll(): string {
    //     return 'This action returns all customers';
    // }

    // @Get(':id')
    // findbyId(@Param() params): string {
    //     return `This action find customer with id: #${params.id}`
    // }

    // @Get('user/:username')
    // findbyUsername(@Param('username') username: string): string {
    //     return `This action find customer with username: ${username}`
    // }

    // @Post()
    // create(): string {
    //     return 'This creates a new customer'
    // }

    // @Post('/new')
    // createNew(@Body() createCustomerDto: CreateCustomerDto) {
    //     return 'This action adds a new customer'
    // }
}
