import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingOrderDetailExtra } from 'output/entities/BookingOrderDetailExtra';
import { Repository } from 'typeorm';
import { createBoexDto } from './boex.dto';

@Injectable()
export class OrderDetailExtraService {
  constructor(
    @InjectRepository(BookingOrderDetailExtra)
    private boexService: Repository<BookingOrderDetailExtra>,
  ) {}

  public async findAll() {
    return await this.boexService.find({ relations: { boexPrit: true } });
  }

  public async create(createBoexDto: createBoexDto) {
    try {
      const boex = await this.boexService.save(createBoexDto);
      return boex;
    } catch (error) {
      return error.message;
    }
  }
}
