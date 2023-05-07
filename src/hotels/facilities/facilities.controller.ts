import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FacilitiesService } from './facilities.service';

@Controller('/facilities')
export class FacilitiesController {
  constructor(private ServicesFacilities: FacilitiesService) {}

  @Get()
  public async getAll() {
    return await this.ServicesFacilities.findAll();
  }

  @Get('/:id')
  public async getOne(@Param('faciId') faciId: number) {
    return await this.ServicesFacilities.findOne(faciId);
  }

  @Post()
  public async Create(
    @Body('faciId') faciId,
    @Body('faciName') faciName: string,
    @Body('faciMaxNumber') faciMaxNumber: number,
    @Body('faciMeasureUnit') faciMeasureUnit: string,
    @Body('faciRoomNumber') faciRoomNumber: string,
    @Body('faciStartdate') faciStartdate: Date = new Date(),
    @Body('faciEnddate') faciEnddate: Date = new Date(),
    @Body('faciLowPrice') faciLowPrice: string,
    @Body('faciHighPrice') faciHighPrice: string,
    @Body('faciDiscount') faciDiscount: string,
    @Body('faciTaxRate') faciTaxRate: string,
    @Body('faciModifiedDate') faciModifiedDate: Date = new Date(),
    @Body('faciRatePrice') faciRatePrice: string,
    @Body('faciCagroId') faciCagro,
    @Body('faciHotelId') faciHotel,
  ) {
    return await this.ServicesFacilities.Create(
      faciId,
      faciName,
      faciMaxNumber,
      faciMeasureUnit,
      faciRoomNumber,
      faciStartdate,
      faciEnddate,
      faciLowPrice,
      faciHighPrice,
      faciDiscount,
      faciTaxRate,
      faciModifiedDate,
      faciRatePrice,
      faciCagro,
      faciHotel,
    );
  }

  @Put('/:id')
  public async Update(
    @Param('id') id: number,
    @Body('faciName') faciName: string,
    @Body('faciMaxNumber') faciMaxNumber: number,
    @Body('faciMeasureUnit') faciMeasureUnit: string,
    @Body('faciRoomNumber') faciRoomNumber: string,
    @Body('faciStartdate') faciStartdate: Date = new Date(),
    @Body('faciEnddate') faciEnddate: Date = new Date(),
    @Body('faciLowPrice') faciLowPrice: string,
    @Body('faciHighPrice') faciHighPrice: string,
    @Body('faciDiscount') faciDiscount: string,
    @Body('faciTaxRate') faciTaxRate: string,
    @Body('faciModifiedDate') faciModifiedDate: Date = new Date(),
    @Body('faciCagroId') faciCagro,
    @Body('faciHotelId') faciHotel,
  ) {
    return await this.ServicesFacilities.Update(
      id,
      faciName,
      faciMaxNumber,
      faciMeasureUnit,
      faciRoomNumber,
      faciStartdate,
      faciEnddate,
      faciLowPrice,
      faciHighPrice,
      faciDiscount,
      faciTaxRate,
      faciModifiedDate,
      faciCagro,
      faciHotel,
    );
  }

  @Delete('/:id')
  public async Delete(@Param('id') id: string) {
    return await this.ServicesFacilities.Delete(id);
  }
}
