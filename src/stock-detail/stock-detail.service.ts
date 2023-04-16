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

  public async Create(
    stodStockId: number,
    stodBarcodeNumber: string,
    stodStatus: string,
    stodNotes: string,
    stodFaci: Facilities,
    stodPohe: PurchaseOrderHeader,
  ) {
    try {
      const stockDetail = await this.serviceRepo.save({
        stodStockId: stodStockId,
        stodBarcodeNumber: stodBarcodeNumber,
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
    stodBarcodeNumber: string,
    stodStatus: string,
    stodNotes: string,
    stodFaci: Facilities,
    stodPohe: PurchaseOrderHeader,
  ) {
    try {
      const stockDetail = await this.serviceRepo.update(
        { stodStockId, stodId },
        {
          stodBarcodeNumber: stodBarcodeNumber,
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
