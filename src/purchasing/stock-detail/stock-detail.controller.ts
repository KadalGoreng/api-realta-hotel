import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StockDetailService } from './stock-detail.service';
import { Facilities } from 'output/entities/Facilities';
import { PurchaseOrderHeader } from 'output/entities/PurchaseOrderHeader';

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

  @Get('/stock/:id')
  public async getOneByStockId(@Param('id') id: number) {
    return await this.Services.findOneByStockId(id);
  }

  @Post()
  public async Create(
    @Body('stodStockId') stodStockId: number,
    @Body('stodStatus') stodStatus: string,
    @Body('stodNotes') stodNotes: string,
    @Body('stodFaci') stodFaci: Facilities,
    @Body('stodPohe') stodPohe: PurchaseOrderHeader,
  ) {
    return await this.Services.Create(
      stodStockId,
      stodStatus,
      stodNotes,
      stodFaci,
      stodPohe,
    );
  }

  @Put(':stodStockId/:stodId')
  public async Update(
    @Param('stodStockId') stodStockId: number,
    @Param('stodId') stodId: number,
    @Body('stodStatus') stodStatus: string,
    @Body('stodNotes') stodNotes: string,
    @Body('stodFaci') stodFaci: Facilities,
    @Body('stodPohe') stodPohe: PurchaseOrderHeader,
  ) {
    return await this.Services.Update(
      stodStockId,
      stodId,
      stodStatus,
      stodNotes,
      stodFaci,
      stodPohe,
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
