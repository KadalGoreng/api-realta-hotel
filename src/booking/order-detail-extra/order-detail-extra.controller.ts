import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDetailExtraService } from './order-detail-extra.service';
import { createBoexDto } from './boex.dto';

@Controller('order-detail-extra')
export class OrderDetailExtraController {
  constructor(private service: OrderDetailExtraService) {}

  @Get()
  public async getBookingOrder() {
    return await this.service.findAll();
  }

  @Post()
  public async createBookingOrder(@Body() createBoexDto: createBoexDto) {
    return await this.service.create(createBoexDto);
  }
}
