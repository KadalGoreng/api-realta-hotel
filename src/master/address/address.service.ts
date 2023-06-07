import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'output/entities/Address';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepo: Repository<Address>,
  ) {}

  public async findAll() {
    return await this.addressRepo.find({ relations: { addrProv: true } });
  }

  public async findByProvince(id: number) {
    return await this.addressRepo.find({
      where: { addrProv: { provId: id } },
      relations: { addrProv: true },
      order: { addrId: 1 },
    });
  }

  public async create(createAddressDto: CreateAddressDto) {
    try {
      const master = await this.addressRepo.save({
        ...createAddressDto,
      });
      return master;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id: number, createAddressDto: CreateAddressDto) {
    try {
      const master = await this.addressRepo.update(id, {
        ...createAddressDto,
      });
      return master;
    } catch (error) {
      return error.message;
    }
  }

  public async delete(id: number) {
    try {
      const master = await this.addressRepo.delete(id);
      return master;
    } catch (error) {
      return error.message;
    }
  }
}
