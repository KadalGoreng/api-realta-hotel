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
import { VendorService } from './vendor.service';

@Controller('vendor')
export class VendorController {
  constructor(private Services: VendorService) {}

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
    @Body('vendorName') vendorName: string,
    @Body('vendorActive') vendorActive: number,
    @Body('vendorPriority') vendorPriority: number,
    @Body('vendorRegisterDate') vendorRegisterDate: string,
    @Body('vendorWeburl') vendorWeburl: string,
  ) {
    return await this.Services.Create(
      vendorName,
      vendorActive,
      vendorPriority,
      vendorRegisterDate,
      vendorWeburl,
    );
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('vendorName') vendorName: string,
    @Body('vendorActive') vendorActive: number,
    @Body('vendorPriority') vendorPriority: number,
    @Body('vendorRegisterDate') vendorRegisterDate: string,
    @Body('vendorWeburl') vendorWeburl: string,
  ) {
    return await this.Services.Update(
      id,
      vendorName,
      vendorActive,
      vendorPriority,
      vendorRegisterDate,
      vendorWeburl,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
