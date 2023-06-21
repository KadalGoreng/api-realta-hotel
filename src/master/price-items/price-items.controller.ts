import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PriceItemsService } from './price-items.service';
import { PaginatedPrice, PaginationOptions, priceDto } from './price.dto';

@Controller('price-items')
export class PriceItemsController {
  constructor(private Services: PriceItemsService) {}
  @Get()
  public async getAll(
    @Query() query: PaginationOptions,
  ): Promise<PaginatedPrice> {
    const { name, page, limit } = query;

    const options: PaginationOptions = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
    };

    return await this.Services.findAll(name, options);
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async create(@Body() priceDto: priceDto) {
    return await this.Services.create(priceDto);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() priceDto: priceDto) {
    return await this.Services.update(id, priceDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.Services.delete(id);
  }
}
