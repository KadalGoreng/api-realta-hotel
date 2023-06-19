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
import { StockDetailService } from './stock-detail.service';
import { Facilities } from 'output/entities/Facilities';
import { PurchaseOrderHeader } from 'output/entities/PurchaseOrderHeader';
import {
  CreateStockDetailDto,
  PaginationOptions,
  UpdateStockDetailDto,
} from './stock-detail-dto';

@Controller('stockdetail')
export class StockDetailController {
  constructor(private Services: StockDetailService) {}

  @Get()
  public async getAll() {
    return await this.Services.get();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Get('stock/:id')
  public async getOneByStockId(
    @Param('id') id: string,
    @Query() query: PaginationOptions,
  ) {
    const { page, limit } = query;

    const options: PaginationOptions = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
    };
    return await this.Services.findOneByStockId(id, options);
  }

  @Post()
  public async Create(@Body() createStockDetailDto: CreateStockDetailDto) {
    return await this.Services.Create(createStockDetailDto);
  }

  @Put(':stodStockId/:stodId')
  public async Update(
    @Param('stodStockId') stodStockId: number,
    @Param('stodId') stodId: number,
    @Body() updateStockDetailDto: UpdateStockDetailDto,
  ) {
    return await this.Services.Update(
      stodStockId,
      stodId,
      updateStockDetailDto,
    );
  }

  @Delete(':stodStockId/:stodId')
  public async Delete(
    @Param('stodStockId') stodStockId: number,
    @Param('stodId') stodId: number,
  ) {
    return await this.Services.Delete(stodStockId, stodId);
  }
}
