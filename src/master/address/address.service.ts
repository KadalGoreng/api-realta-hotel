import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'output/entities/Address';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepo: Repository<Address>,
  ) {}

  public async findAll() {
    return await this.addressRepo.find();
  }

  public async findOne(id: number) {
    return await this.addressRepo.findOne({
      where: { addrId: id },
      relations: { addrProv: { provCountry: { countryRegion: true } } },
    });
  }
}
