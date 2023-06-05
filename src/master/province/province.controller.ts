import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProvinceDto } from './province.dto';
import { ProvincesService } from './province.service';

@Controller('provinces')
export class ProvincesController {
  constructor(private Services: ProvincesService) {}
  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findByCountry(id);
  }
  @Post()
  public async create(
    @Body()
    masterDetail: CreateProvinceDto,
  ) {
    return await this.Services.create(masterDetail);
  }
  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body()
    masterDetail: CreateProvinceDto,
  ) {
    return await this.Services.update(id, masterDetail);
  }
  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.Services.delete(id);
  }
}
