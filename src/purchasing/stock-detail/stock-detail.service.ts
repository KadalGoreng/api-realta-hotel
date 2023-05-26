import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Facilities } from 'output/entities/Facilities';
import { PurchaseOrderHeader } from 'output/entities/PurchaseOrderHeader';
import { StockDetail } from 'output/entities/StockDetail';
import { Repository } from 'typeorm';

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

  public async findOneByStockId(stodStockId: number) {
    return await this.serviceRepo.find({
      where: { stodStockId: stodStockId },
    });
  }

  public async Create(
    stodStockId: number,

    stodStatus: string,
    stodNotes: string,
    stodFaci: Facilities,
    stodPohe: PurchaseOrderHeader,
  ) {
    try {
      const stockDetail = await this.serviceRepo.save({
        stodStockId: stodStockId,

        stodStatus: stodStatus,
        stodNotes: stodNotes,
        stodFaci: stodFaci,
        stodPohe: stodPohe,
      });
      return stockDetail;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    stodStockId: number,
    stodId: number,

    stodStatus: string,
    stodNotes: string,
    stodFaci: Facilities,
    stodPohe: PurchaseOrderHeader,
  ) {
    try {
      const stockDetail = await this.serviceRepo.update(
        { stodStockId, stodId },
        {
          stodStatus: stodStatus,
          stodNotes: stodNotes,
          stodFaci: stodFaci,
          stodPohe: stodPohe,
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
