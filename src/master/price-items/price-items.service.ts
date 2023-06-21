import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceItems } from 'output/entities/PriceItems';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import { PaginationOptions, priceDto } from './price.dto';

@Injectable()
export class PriceItemsService {
  constructor(
    @InjectRepository(PriceItems)
    private serviceRepo: Repository<PriceItems>,
  ) {}

  public async findAll(name?: string, options?: PaginationOptions) {
    const query: FindManyOptions<PriceItems> = {
      order: { pritId: 1 },
      take: options?.limit,
      skip: (options?.page - 1) * options?.limit,
    };

    if (name) {
      query.where = {
        pritName: ILike(`%${name}%`),
      };
    }

    const [priceItems, total] = await this.serviceRepo.findAndCount(query);
    const totalPages = Math.ceil(total / options.limit);

    return {
      data: priceItems,
      total,
      totalPages,
      limit: options?.limit,
      currentPage: Number(options.page),
      perPage: options.limit,
    };
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { pritId: id },
    });
  }

  public async create(priceDto: priceDto) {
    try {
      const master = await this.serviceRepo.save({
        ...priceDto,
        pritModifiedDate: new Date(),
      });
      return master;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id: number, priceDto: priceDto) {
    try {
      const master = await this.serviceRepo.update(id, {
        ...priceDto,
        pritModifiedDate: new Date(),
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
