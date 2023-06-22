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
import { StocksService } from './stocks.service';
import {
  CreateStocksDto,
  PaginationOptions,
  PaginationOptionsDetail,
  UpdateStocksDto,
} from './stocks.dto';

@Controller('stocks')
export class StocksController {
  constructor(private Services: StocksService) {}

  // @Get()
  // public async getAll() {
  //   return await this.Services.get();
  // }

  @Get()
  public async getAll(@Query() query: PaginationOptions) {
    const { stockName, page, limit } = query;

    const options: PaginationOptions = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
    };

    return await this.Services.get(stockName, options);
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(@Body() createStocksDto: CreateStocksDto) {
    return await this.Services.Create(createStocksDto);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body() updateStocksDto: UpdateStocksDto,
  ) {
    return await this.Services.Update(id, updateStocksDto);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
