import { Injectable } from '@nestjs/common';
import { Stocks } from 'output/entities/Stocks';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StocksService {
  constructor(
    @InjectRepository(Stocks)
    private serviceRepo: Repository<Stocks>,
  ) {}

  public async get() {
    return await this.serviceRepo.find({
      order: {
        stockId: 'DESC',
      },
      relations: {
        stockDetails: {
          stodPohe: true,
          stodFaci: true,
        },
      },
    });
  }

  public async findOne(stockId: number) {
    return await this.serviceRepo.findOne({
      where: { stockId: stockId },
      relations: { stockDetails: true },
    });
  }

  public async Create(
    stockName: string,
    stockDescription: string,
    stockQuantity: number,
    stockReorderPoint: number,
    stockUsed: number,
    stockScrap: number,
    stockSize: string,
    stockColor: string,
    stockModifiedDate: Date = new Date(),
  ) {
    try {
      const stocks = await this.serviceRepo.save({
        stockName: stockName,
        stockDescription: stockDescription,
        stockQuantity: stockQuantity,
        stockReorderPoint: stockReorderPoint,
        stockUsed: stockUsed,
        stockScrap: stockScrap,
        stockSize: stockSize,
        stockColor: stockColor,
        stockModifiedDate: stockModifiedDate,
      });
      return stocks;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    stockId: number,
    stockName: string,
    stockDescription: string,
    stockQuantity: number,
    stockReorderPoint: number,
    stockUsed: number,
    stockScrap: number,
    stockSize: string,
    stockColor: string,
  ) {
    try {
      const stocks = await this.serviceRepo.update(stockId, {
        stockName: stockName,
        stockDescription: stockDescription,
        stockQuantity: stockQuantity,
        stockReorderPoint: stockReorderPoint,
        stockUsed: stockUsed,
        stockScrap: stockScrap,
        stockSize: stockSize,
        stockColor: stockColor,
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
