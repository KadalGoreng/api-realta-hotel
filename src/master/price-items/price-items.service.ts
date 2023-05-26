import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceItems } from 'output/entities/PriceItems';
import { Repository } from 'typeorm';
import { priceDto } from './price.dto';

@Injectable()
export class PriceItemsService {
  constructor(
    @InjectRepository(PriceItems)
    private serviceRepo: Repository<PriceItems>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { pritId: id },
    });
  }

  public async create(priceDto: priceDto) {
    try {
      const master = await this.serviceRepo.save(priceDto);
      return master;
    } catch (error) {
      return error.message;
    }
  }

  public async delete(id: number) {
    try {
      const master = await this.serviceRepo.delete(id);
      return master;
    } catch (error) {
      return error.message;
    }
  }
}
