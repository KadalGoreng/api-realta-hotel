import { Injectable } from '@nestjs/common';
import { VendorProduct } from 'output/entities/VendorProduct';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stocks } from 'output/entities/Stocks';
import { Vendor } from 'output/entities/Vendor';

@Injectable()
export class VendorProductService {
  constructor(
    @InjectRepository(VendorProduct)
    private serviceRepo: Repository<VendorProduct>,
  ) {}

  public async get() {
    return await this.serviceRepo.find({
      order: {
        veproId: 'DESC',
      },
      relations: {
        veproStock: {
          stockPhotos: true,
        },
        veproVendor: true,
      },
    });
  }

  public async findOne(veproId: number) {
    return await this.serviceRepo.findOne({
      where: { veproId: veproId },
      relations: {
        veproStock: true,
        veproVendor: true,
      },
    });
  }

  public async Create(
    veproQtyStocked: number,
    veproQtyRemaining: number,
    veproPrice: string,
    veproStock: Stocks,
    veproVendor: Vendor,
  ) {
    try {
      const vendorProduct = await this.serviceRepo.save({
        veproQtyStocked: veproQtyStocked,
        veproQtyRemaining: veproQtyRemaining,
        veproPrice: veproPrice,
        veproStock: veproStock,
        veproVendor: veproVendor,
      });
      return vendorProduct;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    veproId: number,
    veproQtyStocked: number,
    veproQtyRemaining: number,
    veproPrice: string,
    veproStock: Stocks,
    veproVendor: Vendor,
  ) {
    try {
      const vendorProduct = await this.serviceRepo.update(veproId, {
        veproQtyStocked: veproQtyStocked,
        veproQtyRemaining: veproQtyRemaining,
        veproPrice: veproPrice,
        veproStock: veproStock,
        veproVendor: veproVendor,
      });
      return vendorProduct;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(veproId: number) {
    try {
      const vendorProduct = await this.serviceRepo.delete(veproId);
      return vendorProduct;
    } catch (error) {
      return error.message;
    }
  }
}
