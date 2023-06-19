import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Facilities } from 'output/entities/Facilities';
import { PurchaseOrderHeader } from 'output/entities/PurchaseOrderHeader';
import { StockDetail } from 'output/entities/StockDetail';
import { FindManyOptions, Repository } from 'typeorm';
import {
  CreateStockDetailDto,
  PaginationOptions,
  UpdateStockDetailDto,
} from './stock-detail-dto';

@Injectable()
export class StockDetailService {
  constructor(
    @InjectRepository(StockDetail)
    private serviceRepo: Repository<StockDetail>,
  ) {}

  public async get() {
    return await this.serviceRepo.find({
      relations: {
        stodFaci: true,
        stodPohe: true,
        stodStock: true,
      },
    });
  }

  public async findOne(stodId: number) {
    return await this.serviceRepo.findOne({
      where: { stodId: stodId },
      relations: {
        stodFaci: true,
        stodPohe: true,
        stodStock: true,
      },
    });
  }

  public async findOneByStockId(
    id: string,
    PaginationOptions?: PaginationOptions,
  ) {
    const { page, limit } = PaginationOptions;

    const query: FindManyOptions<StockDetail> = {
      relations: {
        stodFaci: true,
        stodPohe: true,
        stodStock: true,
      },
      where: { stodStockId: Number(id) },
      take: limit,
      skip: (page - 1) * limit,
    };

    const [priceItems, total] = await this.serviceRepo.findAndCount(query);
    const totalPages = Math.ceil(total / limit);

    return {
      data: priceItems,
      total,
      totalPages,
      limit: limit,
      currentPage: Number(page),
      perPage: limit,
    };
  }

  public async Create(createStockDetailDto: CreateStockDetailDto) {
    try {
      const stockDetail = await this.serviceRepo.save({
        ...createStockDetailDto,
      });
      return stockDetail;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    stodStockId: number,
    stodId: number,
    updateStockDetailDto: UpdateStockDetailDto,
  ) {
    try {
      const stockDetail = await this.serviceRepo.update(
        { stodStockId, stodId },
        {
          ...updateStockDetailDto,
        },
      );
      return stockDetail;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(stodStockId: number, stodId: number) {
    try {
      const stockDetail = await this.serviceRepo.delete({
        stodStockId,
        stodId,
      });
      return stockDetail;
    } catch (error) {
      return error.message;
    }
  }
}
