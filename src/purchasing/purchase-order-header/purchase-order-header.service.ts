import { Injectable } from '@nestjs/common';
import { PurchaseOrderHeader } from 'output/entities/PurchaseOrderHeader';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreatePurchaseOrderHeaderDto,
  PaginationOptions,
  UpdatePurchaseOrderHeaderDto,
} from './purchase-order-header.dto';
import { FindManyOptions, ILike, Repository } from 'typeorm';

@Injectable()
export class PurchaseOrderHeaderService {
  constructor(
    @InjectRepository(PurchaseOrderHeader)
    private serviceRepo: Repository<PurchaseOrderHeader>,
  ) {}

  public async get(
    vendorName?: string,
    status?: number,
    PaginationOptions?: PaginationOptions,
  ) {
    const { page, limit } = PaginationOptions;

    const query: FindManyOptions<PurchaseOrderHeader> = {
      order: {
        poheId: 'DESC',
      },
      relations: {
        poheEmp: true,
        poheVendor: true,
        purchaseOrderDetails: {
          podeStock: true,
        },
      },
      take: limit,
      skip: (page - 1) * limit,
    };

    if (vendorName) {
      query.where = {
        poheVendor: { vendorName: ILike(`%${vendorName}%`) },
      };
    }

    if (status) {
      query.where = {
        ...query.where,
        poheStatus: status,
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

  // public async get() {
  //   return await this.serviceRepo.find({
  //     order: {
  //       poheId: 'DESC',
  //     },
  //     relations: {
  //       poheEmp: true,
  //       poheVendor: true,
  //       purchaseOrderDetails: {
  //         podeStock: true,
  //       },
  //     },
  //   });
  // }

  public async findOne(poheId: number) {
    return await this.serviceRepo.findOne({
      where: { poheId: poheId },
      relations: {
        poheEmp: true,
        poheVendor: true,
        purchaseOrderDetails: {
          podeStock: true,
        },
      },
    });
  }

  // public async Create(
  //   poheStatus: number,
  //   poheSubtotal: string,
  //   poheTax: string,
  //   poheTotalAmount: string,
  //   poheRefund: string,
  //   poheArrivalDate: Date,
  //   pohePayType: string,
  //   poheEmp: Employee,
  //   poheVendor: Vendor,
  //   poheOrderDate: Date = new Date(),
  // ) {
  //   try {
  //     const purchaseOrderHeader = await this.serviceRepo.save({
  //       poheStatus: poheStatus,
  //       poheSubtotal: poheSubtotal,
  //       poheTax: poheTax,
  //       poheTotalAmount: poheTotalAmount,
  //       poheRefund: poheRefund,
  //       poheArrivalDate: poheArrivalDate,
  //       pohePayType: pohePayType,
  //       poheEmp: poheEmp,
  //       poheVendor: poheVendor,
  //       poheOrderDate: poheOrderDate,
  //     });
  //     return purchaseOrderHeader;
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

  // public async Update(
  //   poheId: number,
  //   poheStatus: number,
  //   poheOrderDate: Date,
  //   poheSubtotal: string,
  //   poheTax: string,
  //   poheTotalAmount: string,
  //   poheRefund: string,
  //   poheArrivalDate: Date,
  //   pohePayType: string,
  //   poheEmp: Employee,
  //   poheVendor: Vendor,
  // ) {
  //   try {
  //     const purchaseOrderHeader = await this.serviceRepo.update(poheId, {
  //       poheStatus: poheStatus,
  //       poheOrderDate: poheOrderDate,
  //       poheSubtotal: poheSubtotal,
  //       poheTax: poheTax,
  //       poheTotalAmount: poheTotalAmount,
  //       poheRefund: poheRefund,
  //       poheArrivalDate: poheArrivalDate,
  //       pohePayType: pohePayType,
  //       poheEmp: poheEmp,
  //       poheVendor: poheVendor,
  //     });
  //     return purchaseOrderHeader;
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

  public async Create(
    createPurchaseOrderHeaderDto: CreatePurchaseOrderHeaderDto,
  ) {
    try {
      const purchaseOrderHeader = await this.serviceRepo.save({
        ...createPurchaseOrderHeaderDto,
      });
      return purchaseOrderHeader;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    poheId: number,
    updatePurchaseOrderHeaderDto: UpdatePurchaseOrderHeaderDto,
  ) {
    try {
      const purchaseOrderHeader = await this.serviceRepo.update(poheId, {
        ...updatePurchaseOrderHeaderDto,
      });
      return purchaseOrderHeader;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(poheId: number) {
    try {
      const purchaseOrderHeader = await this.serviceRepo.delete(poheId);
      return purchaseOrderHeader;
    } catch (error) {
      return error.message;
    }
  }
}
