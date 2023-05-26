import { Controller, Get } from '@nestjs/common';
import { SpecialOfferService } from './special-offer.service';

@Controller('special-offer')
export class SpecialOfferController {
  constructor(private service: SpecialOfferService) {}

  @Get()
  public async getSpecialOffers() {
    return await this.service.findAll();
  }
}
