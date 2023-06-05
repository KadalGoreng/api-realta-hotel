import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './address.dto';

@Controller('address')
export class AddressController {
  constructor(private ServicesAddress: AddressService) {}
  @Get()
  public async getAll() {
    return await this.ServicesAddress.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesAddress.findByProvince(id);
  }
  @Post()
  public async create(
    @Body()
    masterDetail: CreateAddressDto,
  ) {
    return await this.ServicesAddress.create(masterDetail);
  }
  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body()
    masterDetail: CreateAddressDto,
  ) {
    return await this.ServicesAddress.update(id, masterDetail);
  }
  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.ServicesAddress.delete(id);
  }
}
