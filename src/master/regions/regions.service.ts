import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regions } from 'output/entities/Regions';
import { Repository } from 'typeorm';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Regions)
    private serviceRepo: Repository<Regions>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({
      order: { regionCode: 'ASC' },
      relations: { countries: { proviences: { addresses: true } } },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { regionCode: id },
    });
  }

  public async create(regionName: string) {
    try {
      const region = await this.serviceRepo.save({
        regionName: regionName,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id: number, regionName: string) {
    try {
      const region = await this.serviceRepo.update(id, {
        regionName: regionName,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async delete(id: number) {
    try {
      const region = await this.serviceRepo.delete(id);
      return region;
    } catch (error) {
      return error.message;
    }
  }
}
