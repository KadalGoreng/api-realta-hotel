import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CountryService } from './country.service';

import { CreateCountryDto } from './country.dto';

@Controller('country')
export class CountryController {
  constructor(private Services: CountryService) {}
  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findByRegion(id);
  }
  @Post()
  public async create(
    @Body()
    createCountryDto: CreateCountryDto,
  ) {
    return await this.Services.create(createCountryDto);
  }
  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body('countryName')
    countryName: string,
  ) {
    return await this.Services.update(id, countryName);
  }
  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.Services.delete(id);
  }
}
