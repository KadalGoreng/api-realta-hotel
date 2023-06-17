import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelsDto, UpdateHotelsDto } from './hotels.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Hotels } from 'output/entities/Hotels';

@Controller('/hotels')
export class HotelsController {
  constructor(private ServicesHotels: HotelsService) {}

  @Get('all/')
  public async getAllData(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('name') name: string,
  ): Promise<Pagination<Hotels>> {
    limit = limit > 100 ? 100 : limit;
    return this.ServicesHotels.findAllData(
      {
        page,
        limit,
      },
      name,
    );
  }

  @Get()
  public async getAll() {
    return await this.ServicesHotels.findAll();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesHotels.findOne(id);
  }

  @Post()
  public async Create(@Body() createHotelsDto: CreateHotelsDto) {
    return await this.ServicesHotels.Create(createHotelsDto);
  }

  @Put('/:id')
  public async Update(
    @Param('id') id: number,
    @Body() updateHotelsDto: UpdateHotelsDto,
  ) {
    return await this.ServicesHotels.Update(id, updateHotelsDto);
  }

  @Delete('/:id')
  public async Delete(@Param('id') id: number) {
    return await this.ServicesHotels.Delete(id);
  }
}
