import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';

@Controller('order-detail')
export class OrderDetailController {
  constructor(private service: OrderDetailService) {}

  @Get()
  public async orderDetail() {
    return await this.service.findAll();
  }

  @Post()
  public async createOrderDetail(@Body() createBorde) {
    return await this.service.create(createBorde);
  }
}
