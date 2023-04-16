import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VendorProductService } from './vendor-product.service';
import { Stocks } from 'output/entities/Stocks';
import { Vendor } from 'output/entities/Vendor';

@Controller('vendorproduct')
export class VendorProductController {
  constructor(private Services: VendorProductService) {}

  @Get()
  public async getAll() {
    return await this.Services.get();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(
    @Body('veproQtyStocked') veproQtyStocked: number,
    @Body('veproQtyRemaining') veproQtyRemaining: number,
    @Body('veproPrice') veproPrice: string,
    @Body('veproStock') veproStock: Stocks,
    @Body('veproVendor') veproVendor: Vendor,
  ) {
    return await this.Services.Create(
      veproQtyStocked,
      veproQtyRemaining,
      veproPrice,
      veproStock,
      veproVendor,
    );
  }

  @Put(':id')
  public async Update(
    @Param('veproId') veproId: number,
    @Body('veproQtyStocked') veproQtyStocked: number,
    @Body('veproQtyRemaining') veproQtyRemaining: number,
    @Body('veproPrice') veproPrice: string,
    @Body('veproStock') veproStock: Stocks,
    @Body('veproVendor') veproVendor: Vendor,
  ) {
    return await this.Services.Update(
      veproId,
      veproQtyStocked,
      veproQtyRemaining,
      veproPrice,
      veproStock,
      veproVendor,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
