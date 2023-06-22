import { Injectable } from '@nestjs/common';
import { PurchaseOrderDetail } from 'output/entities/PurchaseOrderDetail';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreatePurchaseOrderDetailDto,
  UpdatePurchaseOrderDetailDto,
} from './purchase-order-detail.dto';

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

  public async findOneByStockId(podePoheId: number) {
    return await this.serviceRepo.find({
      where: { podePoheId: podePoheId },
      relations: {
        podeStock: true,
      },
    });
  }

  public async Create(
    createPurchaseOrderDetailDto: CreatePurchaseOrderDetailDto,
  ) {
    try {
      return await this.serviceRepo.save({ ...createPurchaseOrderDetailDto });
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    podePoheId: number,
    podeId: number,
    updatePurchaseOrderDetailDto: UpdatePurchaseOrderDetailDto,
  ) {
    try {
      const purchaseOrderDetail = await this.serviceRepo.update(
        { podePoheId, podeId },
        {
          ...updatePurchaseOrderDetailDto,
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
