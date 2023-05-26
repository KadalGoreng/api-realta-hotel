import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PurchaseOrderDetailService } from './purchase-order-detail.service';
import { Stocks } from 'output/entities/Stocks';

@Controller('purchaseOrderDetail')
export class PurchaseOrderDetailController {
  constructor(private Services: PurchaseOrderDetailService) {}

  @Get()
  public async getAll() {
    return await this.Services.get();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Get('/podstock/:id')
  public async getOneBy(@Param('id') id: number) {
    return await this.Services.findOneByStockId(id);
  }

  @Post()
  public async Create(
    @Body('podePoheId') podePoheId: number,
    @Body('podeOrderQty') podeOrderQty: number,
    @Body('podePrice') podePrice: string,
    @Body('podeLineTotal') podeLineTotal: string,
    @Body('podeReceivedQty') podeReceivedQty: string,
    @Body('podeRejectedQty') podeRejectedQty: string,
    @Body('podeStockedQty') podeStockedQty: string,
    // @Body('podeModifiedDate') podeModifiedDate: Date,
    @Body('podeStock') podeStock: Stocks,
  ) {
    return await this.Services.Create(
      podePoheId,
      podeOrderQty,
      podePrice,
      podeLineTotal,
      podeReceivedQty,
      podeRejectedQty,
      podeStockedQty,
      // podeModifiedDate,
      podeStock,
    );
  }

  @Put(':podePoheId/:podeId')
  public async Update(
    @Param('podePoheId') podePoheId: number,
    @Param('podeId') podeId: number,
    @Body('podeOrderQty') podeOrderQty: number,
    @Body('podePrice') podePrice: string,
    @Body('podeLineTotal') podeLineTotal: string,
    @Body('podeReceivedQty') podeReceivedQty: string,
    @Body('podeRejectedQty') podeRejectedQty: string,
    @Body('podeStockedQty') podeStockedQty: string,
    // @Body('podeModifiedDate') podeModifiedDate: Date,
    @Body('podeStock') podeStock: Stocks,
  ) {
    return await this.Services.Update(
      podePoheId,
      podeId,
      podeOrderQty,
      podePrice,
      podeLineTotal,
      podeReceivedQty,
      podeRejectedQty,
      podeStockedQty,
      // podeModifiedDate,
      podeStock,
    );
  }

  @Delete(':podePoheId/:podeId')
  public async Delete(
    @Param('podePoheId') podePoheId: number,
    @Param('podeId') podeId: number,
  ) {
    return await this.Services.Delete(podePoheId, podeId);
  }
}
