import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { StockPhotoService } from './stock-photo.service';
import { Stocks } from 'output/entities/Stocks';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { of } from 'rxjs';

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
  @UseInterceptors(FileInterceptor('file'))
  public async create(
    @UploadedFile() file,
    @Body('sphoPrimary') sphoPrimary: number,
    @Body('stockId') stockId: number,
    @Body('sphoUrl') sphoUrl: string,
  ) {
    return await this.Services.Upload(file, sphoPrimary, stockId, sphoUrl);
  }

  // @Put(':id')
  // @UseInterceptors(FileInterceptor('file'))
  // public async Update(
  //   @Param('id') id: number,
  //   @UploadedFile() file,
  //   @Body('sphoPrimary') sphoPrimary: number,
  //   @Body('stockId') stockId: number,
  //   @Body('sphoUrl') sphoUrl: string,
  // ) {
  //   return await this.Services.Update(id, file, sphoPrimary, stockId, sphoUrl);
  // }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body()
    createStockPhoto: {
      sphoPrimary: number;
    },
  ) {
    return await this.Services.update(id, createStockPhoto);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }

  @Get('image/:imagename')
  findImage(@Param('imagename') imagename: any, @Res() res: any) {
    return of(res.sendFile(join(process.cwd(), 'uploads/' + imagename)));
  }
}
