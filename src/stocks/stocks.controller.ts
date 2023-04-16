import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private Services: StocksService) {}

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
    @Body('stockName') stockName: string,
    @Body('stockDescription') stockDescription: string,
    @Body('stockQuantity') stockQuantity: number,
    @Body('stockReorderPoint') stockReorderPoint: number,
    @Body('stockUsed') stockUsed: number,
    @Body('stockScrap') stockScrap: number,
    @Body('stockSize') stockSize: string,
    @Body('stockColor') stockColor: string,
  ) {
    return await this.Services.Create(
      stockName,
      stockDescription,
      stockQuantity,
      stockReorderPoint,
      stockUsed,
      stockScrap,
      stockSize,
      stockColor,
    );
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('stockName') stockName: string,
    @Body('stockDescription') stockDescription: string,
    @Body('stockQuantity') stockQuantity: number,
    @Body('stockReorderPoint') stockReorderPoint: number,
    @Body('stockUsed') stockUsed: number,
    @Body('stockScrap') stockScrap: number,
    @Body('stockSize') stockSize: string,
    @Body('stockColor') stockColor: string,
  ) {
    return await this.Services.Update(
      id,
      stockName,
      stockDescription,
      stockQuantity,
      stockReorderPoint,
      stockUsed,
      stockScrap,
      stockSize,
      stockColor,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
