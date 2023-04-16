import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
// import { StocksService } from './stocks.service';
import { PurchaseOrderHeaderService } from './purchase-order-header.service';
import { Employee } from 'output/entities/Employee';
import { Vendor } from 'output/entities/Vendor';

@Controller('purchaseOrderHeader')
export class PurchaseOrderHeaderController {
  constructor(private Services: PurchaseOrderHeaderService) {}

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
    @Body('poheNumber') poheNumber: string,
    @Body('poheStatus') poheStatus: number,
    @Body('poheOrderDate') poheOrderDate: Date,
    @Body('poheSubtotal') poheSubtotal: string,
    @Body('poheTax') poheTax: string,
    @Body('poheTotalAmount') poheTotalAmount: string,
    @Body('poheRefund') poheRefund: string,
    @Body('poheArrivalDate') poheArrivalDate: Date,
    @Body('pohePayType') pohePayType: string,
    @Body('poheEmp') poheEmp: Employee,
    @Body('poheVendor') poheVendor: Vendor,
  ) {
    return await this.Services.Create(
      poheNumber,
      poheStatus,
      poheOrderDate,
      poheSubtotal,
      poheTax,
      poheTotalAmount,
      poheRefund,
      poheArrivalDate,
      pohePayType,
      poheEmp,
      poheVendor,
    );
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('poheNumber') poheNumber: string,
    @Body('poheStatus') poheStatus: number,
    @Body('poheOrderDate') poheOrderDate: Date,
    @Body('poheSubtotal') poheSubtotal: string,
    @Body('poheTax') poheTax: string,
    @Body('poheTotalAmount') poheTotalAmount: string,
    @Body('poheRefund') poheRefund: string,
    @Body('poheArrivalDate') poheArrivalDate: Date,
    @Body('pohePayType') pohePayType: string,
    @Body('poheEmp') poheEmp: Employee,
    @Body('poheVendor') poheVendor: Vendor,
  ) {
    return await this.Services.Update(
      id,
      poheNumber,
      poheStatus,
      poheOrderDate,
      poheSubtotal,
      poheTax,
      poheTotalAmount,
      poheRefund,
      poheArrivalDate,
      pohePayType,
      poheEmp,
      poheVendor,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
