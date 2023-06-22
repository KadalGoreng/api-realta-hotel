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
import {
  CreatePurchaseOrderDetailDto,
  UpdatePurchaseOrderDetailDto,
} from './purchase-order-detail.dto';

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
    @Body() createPurchaseOrderDetailDto: CreatePurchaseOrderDetailDto,
  ) {
    return await this.Services.Create(createPurchaseOrderDetailDto);
  }

  @Put(':podePoheId/:podeId')
  public async Update(
    @Param('podePoheId') podePoheId: number,
    @Param('podeId') podeId: number,
    @Body() updatePurchaseOrderDetailDto: UpdatePurchaseOrderDetailDto,
  ) {
    return await this.Services.Update(
      podePoheId,
      podeId,
      updatePurchaseOrderDetailDto,
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
