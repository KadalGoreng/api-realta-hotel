import { Injectable } from '@nestjs/common';
import { PurchaseOrderDetail } from 'output/entities/PurchaseOrderDetail';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stocks } from 'output/entities/Stocks';

@Injectable()
export class PurchaseOrderDetailService {
  constructor(
    @InjectRepository(PurchaseOrderDetail)
    private serviceRepo: Repository<PurchaseOrderDetail>,
  ) {}

  public async get() {
    return await this.serviceRepo.find({
      relations: {
        podeStock: true,
        podePohe: true,
      },
    });
  }

  public async findOne(podeId: number) {
    return await this.serviceRepo.findOne({
      where: { podeId: podeId },
      relations: {
        podeStock: true,
        podePohe: true,
      },
    });
  }

  public async Create(
    podePoheId: number,
    podeOrderQty: number,
    podePrice: string,
    podeLineTotal: string,
    podeReceivedQty: string,
    podeRejectedQty: string,
    podeStockedQty: string,
    podeStock: Stocks,
    podeModifiedDate: Date = new Date(),
  ) {
    try {
      const purchaseOrderDetail = await this.serviceRepo.save({
        podePoheId: podePoheId,
        podeOrderQty: podeOrderQty,
        podePrice: podePrice,
        podeLineTotal: podeLineTotal,
        podeReceivedQty: podeReceivedQty,
        podeRejectedQty: podeRejectedQty,
        podeStockedQty: podeStockedQty,
        podeStock: podeStock,
        podeModifiedDate: podeModifiedDate,
      });
      return purchaseOrderDetail;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    podePoheId: number,
    podeId: number,
    podeOrderQty: number,
    podePrice: string,
    podeLineTotal: string,
    podeReceivedQty: string,
    podeRejectedQty: string,
    podeStockedQty: string,
    podeStock: Stocks,
    podeModifiedDate: Date = new Date(),
  ) {
    try {
      const purchaseOrderDetail = await this.serviceRepo.update(
        { podePoheId, podeId },
        {
          podeOrderQty: podeOrderQty,
          podePrice: podePrice,
          podeLineTotal: podeLineTotal,
          podeReceivedQty: podeReceivedQty,
          podeRejectedQty: podeRejectedQty,
          podeStockedQty: podeStockedQty,
          podeStock: podeStock,
          podeModifiedDate: podeModifiedDate,
        },
      );
      return purchaseOrderDetail;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(podePoheId: number, podeId: number) {
    try {
      const purchaseOrderDetail = await this.serviceRepo.delete({
        podePoheId,
        podeId,
      });
      return purchaseOrderDetail;
    } catch (error) {
      return error.message;
    }
  }
}
