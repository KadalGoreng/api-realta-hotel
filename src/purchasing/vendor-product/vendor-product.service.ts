import { Injectable } from '@nestjs/common';
import { VendorProduct } from 'output/entities/VendorProduct';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  CreateVendorProductDto,
  PaginationOptions,
  UpdateVendorProductDto,
  filterVendorProductDto,
} from './vendor-product.dto';

@Injectable()
export class VendorProductService {
  constructor(
    @InjectRepository(VendorProduct)
    private serviceRepo: Repository<VendorProduct>,
  ) {}

  public async get(filterVendorProductDto: filterVendorProductDto) {
    const { name, price } = filterVendorProductDto;
    const query: FindManyOptions<VendorProduct> = {
      order: {
        veproPrice: Number(price) === 1 ? 1 : -1,
      },
      relations: {
        veproStock: {
          stockPhotos: true,
        },
        veproVendor: true,
      },
    };
    if (name) {
      query.where = {
        veproStock: { stockName: ILike(`%${name}%`) },
      };
    }
    return await this.serviceRepo.find(query);
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

  public async findOneByVendorId(
    id: string,
    PaginationOptions?: PaginationOptions,
  ) {
    const { page, limit } = PaginationOptions;

    const query: FindManyOptions<VendorProduct> = {
      relations: {
        veproStock: true,
        veproVendor: true,
      },
      where: { veproVendor: { vendorId: Number(id) } },
      take: limit,
      skip: (page - 1) * limit,
    };

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

  public async Create(createVendorProductDto: CreateVendorProductDto) {
    try {
      return await this.serviceRepo.save({ ...createVendorProductDto });
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    veproId: number,
    updateVendorProductDto: UpdateVendorProductDto,
  ) {
    try {
      const vendorProduct = await this.serviceRepo.update(veproId, {
        ...updateVendorProductDto,
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
