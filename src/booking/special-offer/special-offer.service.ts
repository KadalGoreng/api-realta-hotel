import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpecialOffers } from 'output/entities/SpecialOffers';
import { Repository } from 'typeorm';

@Injectable()
export class SpecialOfferService {
  constructor(
    @InjectRepository(SpecialOffers)
    private specialOfferService: Repository<SpecialOffers>,
  ) {}

  public async findAll() {
    return await this.specialOfferService.find();
  }
}
