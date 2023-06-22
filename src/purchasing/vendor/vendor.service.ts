import { Injectable } from '@nestjs/common';
// import { Stocks } from 'output/entities/Stocks';
import { Vendor } from 'output/entities/Vendor';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateVendorDto,
  PaginationOptions,
  UpdateVendorDto,
} from './vendor.dto';
import { FindManyOptions, ILike, Repository } from 'typeorm';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private serviceRepo: Repository<Vendor>,
  ) {}

  public async get(
    vendorName?: string,
    status?: number,
    PaginationOptions?: PaginationOptions,
  ) {
    const { page, limit } = PaginationOptions;

    const query: FindManyOptions<Vendor> = {
      order: {
        vendorId: 'DESC',
      },
      relations: { vendorProducts: { veproStock: true } },
      take: limit,
      skip: (page - 1) * limit,
    };

    if (vendorName) {
      query.where = {
        vendorName: ILike(`%${vendorName}%`),
      };
    }

    if (status) {
      query.where = {
        ...query.where,
        vendorActive: status,
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

  public async findOne(vendorId: number) {
    return await this.serviceRepo.findOne({
      where: { vendorId: vendorId },
      relations: { vendorProducts: { veproStock: { stockPhotos: true } } },
    });
  }

  public async Create(createVendorDto: CreateVendorDto) {
    try {
      return await this.serviceRepo.save({
        ...createVendorDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  public async Update(vendorId: number, updateVendorDto: UpdateVendorDto) {
    try {
      const vendor = await this.serviceRepo.update(vendorId, {
        ...updateVendorDto,
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
