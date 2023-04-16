import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StockPhotoService } from './stock-photo.service';
import { Stocks } from 'output/entities/Stocks';

@Controller('stockPhoto')
export class StockPhotoController {
  constructor(private Services: StockPhotoService) {}

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
    @Body('sphoThumbnailFilename') sphoThumbnailFilename: string,
    @Body('sphoPhotoFilename') sphoPhotoFilename: string,
    @Body('sphoPrimary') sphoPrimary: number,
    @Body('sphoUrl') sphoUrl: string,
    @Body('sphoStock') sphoStock: Stocks,
  ) {
    return await this.Services.Create(
      sphoThumbnailFilename,
      sphoPhotoFilename,
      sphoPrimary,
      sphoUrl,
      sphoStock,
    );
  }

  //   @Put(':id')
  //   public async Update(
  //     @Param('id') id: number,
  //     @Body('stockName') stockName: string,
  //     @Body('stockDescription') stockDescription: string,
  //     @Body('stockQuantity') stockQuantity: number,
  //     @Body('stockReorderPoint') stockReorderPoint: number,
  //     @Body('stockUsed') stockUsed: number,
  //     @Body('stockScrap') stockScrap: number,
  //     @Body('stockSize') stockSize: string,
  //     @Body('stockColor') stockColor: string,
  //   ) {
  //     return await this.Services.Update(
  //       id,
  //       stockName,
  //       stockDescription,
  //       stockQuantity,
  //       stockReorderPoint,
  //       stockUsed,
  //       stockScrap,
  //       stockSize,
  //       stockColor,
  //     );
  //   }

  //   @Delete(':id')
  //   public async Delete(@Param('id') id: number) {
  //     return await this.Services.Delete(id);
  //   }
}
