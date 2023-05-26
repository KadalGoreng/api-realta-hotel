import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Policy } from 'output/entities/Policy';
import { Repository } from 'typeorm';

@Injectable()
export class PolicyService {
  constructor(
    @InjectRepository(Policy)
    private serviceRepo: Repository<Policy>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({
      relations: { policyCategoryGroups: { pocaCagro: true } },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.find({
      where: { policyCategoryGroups: { pocaCagro: { cagroId: id } } },
    });
  }

  public async create(poliName: string, poliDescription: string) {
    try {
      const master = await this.serviceRepo.save({
        poliName: poliName,
        poliDescription: poliDescription,
      });
      return master;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id: number, poliName: string, poliDescription: string) {
    try {
      const master = await this.serviceRepo.update(id, {
        poliName: poliName,
        poliDescription: poliDescription,
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
