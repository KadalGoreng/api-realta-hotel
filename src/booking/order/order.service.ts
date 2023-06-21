import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingOrders } from 'output/entities/BookingOrders';
import { Repository } from 'typeorm';
import { createOrderDto } from './order.dto';

@Injectable()
export class BookingOrderService {
  constructor(
    @InjectRepository(BookingOrders)
    private bookingOrderService: Repository<BookingOrders>,
  ) {}

  public async findAll() {
    return await this.bookingOrderService.find({
      relations: { boorUser: true, boorHotel: true },
      order: { boorId: -1 },
    });
  }

  public async findByIdUser(id: number) {
    return await this.bookingOrderService.findOne({
      where: { boorUser: { userId: id } },
      relations: { bookingOrderDetail: true, boorUser: true },
      order: { boorId: -1 },
    });
  }

  public async create(createOrderDto: createOrderDto) {
    try {
      await this.bookingOrderService.save(createOrderDto);
      return 'Successfully Add';
    } catch (error) {
      return error.message;
    }
  }

  public async delete(id: number) {
    try {
      await this.bookingOrderService.delete(id);
      return `Successfully delete id: ${id}`;
    } catch (error) {
      return error.message;
    }
  }
}
