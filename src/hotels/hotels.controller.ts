import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('/hotels')
export class HotelsController {
  constructor(private ServicesHotels: HotelsService) {}

  @Get()
  public async getAll() {
    return await this.ServicesHotels.findAll();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesHotels.findOne(id);
  }

  @Post()
  public async Create(
    @Body('hotelId') hotelId,
    @Body('hotelName') hotelName: string,
    @Body('hotelDescription') hotelDescription: string,
    @Body('hotelRatingStar') hotelRatingStar: number,
    @Body('hotelPhonenumber') hotelPhonenumber: string,
    @Body('hotelModifiedDate') hotelModifiedDate: Date = new Date(),
    @Body('addrId') hotelAdddr,
  ) {
    return await this.ServicesHotels.Create(
      hotelId,
      hotelName,
      hotelDescription,
      hotelRatingStar,
      hotelPhonenumber,
      hotelModifiedDate,
      hotelAdddr,
    );
  }
  @Put('/:id')
  public async Update(
    @Param('id') id: number,
    @Body('hotelName') hotelName: string,
    @Body('hotelDescription') hotelDescription: string,
    @Body('hotelRatingStar') hotelRatingStar: number,
    @Body('hotelPhonenumber') hotelPhonenumber: string,
    @Body('hotelModifiedDate') hotelModifiedDate: Date = new Date(),
    @Body('addrId') hotelAdddr,
  ) {
    return await this.ServicesHotels.Update(
      id,
      hotelName,
      hotelDescription,
      hotelRatingStar,
      hotelPhonenumber,
      hotelModifiedDate,
      hotelAdddr,
    );
  }
  @Delete('/:id')
  public async Delete(@Param('id') id: string) {
    return await this.ServicesHotels.Delete(id);
  }
}
