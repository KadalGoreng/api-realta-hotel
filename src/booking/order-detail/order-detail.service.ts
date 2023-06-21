import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingOrderDetail } from 'output/entities/BookingOrderDetail';
import { Repository } from 'typeorm';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectRepository(BookingOrderDetail)
    private borde: Repository<BookingOrderDetail>,
  ) {}

  public async findAll() {
    return await this.borde.find();
  }

  public async create(createBorde) {
    try {
      const borde = await this.borde.save(createBorde);
      return borde;
    } catch (error) {
      return error.message;
    }
  }
}
