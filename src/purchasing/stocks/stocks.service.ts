import { Injectable } from '@nestjs/common';
import { Stocks } from 'output/entities/Stocks';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  CreateStocksDto,
  PaginationOptions,
  PaginationOptionsDetail,
  UpdateStocksDto,
} from './stocks.dto';

@Injectable()
export class StocksService {
  constructor(
    @InjectRepository(Stocks)
    private serviceRepo: Repository<Stocks>,
  ) {}

  public async get(stockName?: string, PaginationOptions?: PaginationOptions) {
    const { page, limit } = PaginationOptions;

    const query: FindManyOptions<Stocks> = {
      order: {
        stockId: 'DESC',
      },
      relations: {
        stockDetails: {
          stodPohe: true,
          stodFaci: true,
        },
      },
      take: limit,
      skip: (page - 1) * limit,
    };

    if (stockName) {
      query.where = {
        stockName: ILike(`%${stockName}%`),
      };
    }

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

  public async findOne(stockId: number) {
    return await this.serviceRepo.findOne({
      where: { stockId: stockId },
      relations: {
        stockDetails: {
          stodPohe: true,
          stodFaci: true,
        },
      },
    });
  }

  public async Create(createStocksDto: CreateStocksDto) {
    try {
      return await this.serviceRepo.save({ ...createStocksDto });
    } catch (error) {
      return error.message;
    }
  }

  public async Update(stockId: number, updateStocksDto: UpdateStocksDto) {
    try {
      const stocks = await this.serviceRepo.update(stockId, {
        ...updateStocksDto,
      });
      return stocks;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(stockId: number) {
    try {
      const stocks = await this.serviceRepo.delete(stockId);
      return stocks;
    } catch (error) {
      return error.message;
    }
  }
}
