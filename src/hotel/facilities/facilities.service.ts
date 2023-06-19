import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Facilities } from 'output/entities/Facilities';
import { Repository } from 'typeorm';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectRepository(Facilities)
    private serviceRepo: Repository<Facilities>,
  ) {}

  public async get() {
    return await this.serviceRepo.find();
  }
}
