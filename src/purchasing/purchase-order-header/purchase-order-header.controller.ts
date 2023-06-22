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
// import { StocksService } from './stocks.service';
import { PurchaseOrderHeaderService } from './purchase-order-header.service';

import {
  CreatePurchaseOrderHeaderDto,
  PaginationOptions,
  UpdatePurchaseOrderHeaderDto,
} from './purchase-order-header.dto';

@Controller('purchaseOrderHeader')
export class PurchaseOrderHeaderController {
  constructor(private Services: PurchaseOrderHeaderService) {}

  // @Get()
  // public async getAll() {
  //   return await this.Services.get();
  // }

  @Get()
  public async getAll(@Query() query: PaginationOptions) {
    const { vendorName, status, page, limit } = query;

    const options: PaginationOptions = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
    };

    return await this.Services.get(vendorName, status, options);
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(
    @Body() createPurchaseOrderHeaderDto: CreatePurchaseOrderHeaderDto,
  ) {
    return await this.Services.Create(createPurchaseOrderHeaderDto);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body() updatePurchaseOrderHeaderDto: UpdatePurchaseOrderHeaderDto,
  ) {
    return await this.Services.Update(id, updatePurchaseOrderHeaderDto);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
