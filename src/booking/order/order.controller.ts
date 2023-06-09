import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BookingOrderService } from './order.service';
import { createOrderDto } from './order.dto';

@Controller('order')
export class BookingOrderController {
  constructor(private service: BookingOrderService) {}

  @Get()
  public async getBookingOrder() {
    return await this.service.findAll();
  }

  @Get(':id')
  public async getBookingOrderById(@Param('id') id: number) {
    return await this.service.findByIdUser(id);
  }

  @Post()
  public async createBookingOrder(@Body() createOrderDto: createOrderDto) {
    if (!createOrderDto.boorTotalRoom) {
      throw new HttpException('Name is required', HttpStatus.BAD_REQUEST);
    }
    return await this.service.create(createOrderDto);
  }

  @Delete(':id')
  public async deleteById(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
