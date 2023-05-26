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
import { CategoryGroup } from 'output/entities/CategoryGroup';
import { Hotels } from 'output/entities/Hotels';

@Controller('/facilities')
export class FacilitiesController {
  constructor(private ServicesFacilities: FacilitiesService) {}

  @Get()
  public async getAll() {
    return await this.ServicesFacilities.findAll();
  }

  @Get('hotel/:id')
  public async getFacilityByHotel(@Param('id') id: number) {
    return await this.ServicesFacilities.find(id);
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesFacilities.findOne(id);
  }

  @Post()
  public async Create(
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
    @Body('faciCagro') faciCagro: CategoryGroup,
    @Body('faciHotel') faciHotel: Hotels,
  ) {
    return await this.ServicesFacilities.Create(
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
    @Body('faciCagroId') faciCagro: CategoryGroup,
    @Body('faciHotelId') faciHotel: Hotels,
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
