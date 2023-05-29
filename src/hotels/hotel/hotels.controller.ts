import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('/hotels')
export class HotelsController {
  constructor(private ServicesHotels: HotelsService) {}

  @Get()
  public async getAll() {
    return await this.ServicesHotels.findAll();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesHotels.findOne(id);
  }

  @Post()
  public async Create(@Body() createHotelsDto: any) {
    return await this.ServicesHotels.Create(createHotelsDto);
  }

  @Put('/:id')
  public async Update(@Param('id') id: number, @Body() updateHotelsDto: any) {
    return await this.ServicesHotels.Update(id, updateHotelsDto);
  }

  @Delete('/:id')
  public async Delete(@Param('id') id: number) {
    return await this.ServicesHotels.Delete(id);
  }
}
