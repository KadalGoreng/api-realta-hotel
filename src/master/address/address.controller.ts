import { Controller, Get, Param } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private ServicesAddress: AddressService) {}
  @Get()
  public async getAll() {
    return await this.ServicesAddress.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesAddress.findOne(id);
  }
}
