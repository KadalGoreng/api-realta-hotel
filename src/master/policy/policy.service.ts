import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Policy } from 'output/entities/Policy';
import { FindManyOptions, Repository } from 'typeorm';
import { PaginationOptions } from './policy.dto';

@Injectable()
export class PolicyService {
  constructor(
    @InjectRepository(Policy)
    private serviceRepo: Repository<Policy>,
  ) {}

  public async findPaginate(options?: PaginationOptions) {
    const query: FindManyOptions<Policy> = {
      order: { poliId: 1 },
      take: options?.limit,
      skip: (options?.page - 1) * options?.limit,
    };
    const [policy, total] = await this.serviceRepo.findAndCount(query);
    const totalPages = Math.ceil(total / options.limit);

    return {
      data: policy,
      total,
      totalPages,
      limit: options?.limit,
      currentPage: Number(options.page),
      perPage: options.limit,
    };
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
