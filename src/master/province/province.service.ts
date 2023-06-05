import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proviences } from 'output/entities/Proviences';
import { Repository } from 'typeorm';
import { CreateProvinceDto } from './province.dto';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Proviences)
    private serviceRepo: Repository<Proviences>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({ relations: { provCountry: true } });
  }

  public async findByCountry(id: number) {
    return await this.serviceRepo.find({
      where: { provCountry: { countryId: id } },
      order: { provId: 1 },
    });
  }

  public async create(masterDetail: CreateProvinceDto) {
    try {
      const master = await this.serviceRepo.save({
        ...masterDetail,
      });
      return master;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id: number, masterDetail: CreateProvinceDto) {
    try {
      const master = await this.serviceRepo.update(id, {
        ...masterDetail,
      });
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
