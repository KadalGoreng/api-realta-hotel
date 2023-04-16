import { Injectable } from '@nestjs/common';
// import { Stocks } from 'output/entities/Stocks';
import { Vendor } from 'output/entities/Vendor';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private serviceRepo: Repository<Vendor>,
  ) {}

  public async get() {
    return await this.serviceRepo.find();
  }

  public async findOne(vendorId: number) {
    return await this.serviceRepo.findOne({ where: { vendorId: vendorId } });
  }

  public async Create(
    vendorName: string,
    vendorActive: number,
    vendorPriority: number,
    vendorRegisterDate: string,
    vendorWeburl: string,
    vendorModifiedDate: Date = new Date(),
  ) {
    try {
      const vendor = await this.serviceRepo.save({
        vendorName: vendorName,
        vendorActive: vendorActive,
        vendorPriority: vendorPriority,
        vendorRegisterDate: vendorRegisterDate,
        vendorWeburl: vendorWeburl,
        vendorModifiedDate: vendorModifiedDate,
      });
      return vendor;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    vendorId: number,
    vendorName: string,
    vendorActive: number,
    vendorPriority: number,
    vendorRegisterDate: string,
    vendorWeburl: string,
    vendorModifiedDate: Date = new Date(),
  ) {
    try {
      const vendor = await this.serviceRepo.update(vendorId, {
        vendorName: vendorName,
        vendorActive: vendorActive,
        vendorPriority: vendorPriority,
        vendorRegisterDate: vendorRegisterDate,
        vendorWeburl: vendorWeburl,
        vendorModifiedDate: vendorModifiedDate,
      });
      return vendor;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(vendorId: number) {
    try {
      const vendor = await this.serviceRepo.delete(vendorId);
      return vendor;
    } catch (error) {
      return error.message;
    }
  }
}
