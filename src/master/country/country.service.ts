import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'output/entities/Country';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './country.dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private serviceRepo: Repository<Country>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({
      relations: { countryRegion: true },
      order: { countryId: 1 },
    });
  }

  public async findByRegion(id: number) {
    return await this.serviceRepo.find({
      where: { countryRegion: { regionCode: id } },
      order: { countryId: 1 },
    });
  }

  public async create(countryDetail: CreateCountryDto) {
    try {
      const country = await this.serviceRepo.save(countryDetail);
      return country;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id: number, countryName: string) {
    try {
      const country = await this.serviceRepo.update(id, { countryName });
      return country;
    } catch (error) {
      return error.message;
    }
  }

  public async delete(id: number) {
    try {
      const country = await this.serviceRepo.delete(id);
      return country;
    } catch (error) {
      return error.message;
    }
  }
}
