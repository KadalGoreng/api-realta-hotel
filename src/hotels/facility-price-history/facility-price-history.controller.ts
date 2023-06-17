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
import {
  CreateFacilityPriceHistoryDto,
  UpdateFacilityPriceHistoryDto,
} from './facility-price-history.dto';

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
    @Body() createFacilityPriceHistoryDto: CreateFacilityPriceHistoryDto,
  ) {
    return await this.ServicesFacilityPriceHistory.Create(
      createFacilityPriceHistoryDto,
    );
  }

  @Put('/:id')
  public async Update(
    @Param('id') id: number,
    @Body() updateFacilityPriceHistoryDto: UpdateFacilityPriceHistoryDto,
  ) {
    return await this.ServicesFacilityPriceHistory.Update(
      id,
      updateFacilityPriceHistoryDto,
    );
  }

  @Delete('/:id')
  public async Delete(@Param('id') id: number) {
    return await this.ServicesFacilityPriceHistory.Delete(id);
  }
}
