import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FacilityPriceHistoryService } from './facility-price-history.service';

@Controller('/facilityPriceHistory')
export class FacilityPriceHistoryController {
  constructor(
    private ServicesFacilityPriceHistory: FacilityPriceHistoryService,
  ) {}

  @Get()
  public async getAll() {
    return await this.ServicesFacilityPriceHistory.findAll();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesFacilityPriceHistory.findOne(id);
  }

  @Post()
  public async Create(
    @Body(' faphFaciId') faphFaci,
    @Body('faphId') faphId,
    @Body('faphStartdate') faphStartdate: Date = new Date(),
    @Body('faphEnddate') faphEnddate: Date = new Date(),
    @Body('faphLowPrice') faphLowPrice: string,
    @Body('faphHighPrice') faphHighPrice: string,
    @Body('faphRatePrice') faphRatePrice: string,
    @Body('faphDiscount') faphDiscount: string,
    @Body('faphTaxRate') faphTaxRate: string,
    @Body('faphModifiedDate') faphModifiedDate: Date = new Date(),
    @Body('faphUserId') faphUser,
  ) {
    return await this.ServicesFacilityPriceHistory.Create(
      faphFaci,
      faphId,
      faphStartdate,
      faphEnddate,
      faphLowPrice,
      faphHighPrice,
      faphRatePrice,
      faphDiscount,
      faphTaxRate,
      faphModifiedDate,
      faphUser,
    );
  }

  @Put('/:id')
  public async Update(
    @Param('id') id: number,
    @Body('faphLowPrice') faphLowPrice: string,
    @Body('faphHighPrice') faphHighPrice: string,
    @Body('faphRatePrice') faphRatePrice: string,
    @Body('faphDiscount') faphDiscount: string,
    @Body('faphTaxRate') faphTaxRate: string,
    @Body('faphModifiedDate') faphModifiedDate: Date = new Date(),
  ) {
    return await this.ServicesFacilityPriceHistory.Update(
      id,
      faphLowPrice,
      faphHighPrice,
      faphRatePrice,
      faphDiscount,
      faphTaxRate,
      faphModifiedDate,
    );
  }

  @Delete('/:id')
  public async Delete(@Param('id') id: string) {
    return await this.ServicesFacilityPriceHistory.Delete(id);
  }
}
