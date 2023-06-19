import { Injectable } from '@nestjs/common';
import { StockPhoto } from 'output/entities/StockPhoto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stocks } from 'output/entities/Stocks';

@Injectable()
export class StockPhotoService {
  constructor(
    @InjectRepository(StockPhoto)
    private serviceRepo: Repository<StockPhoto>,
  ) {}

  public async get() {
    return await this.serviceRepo.find({
      order: {
        sphoId: 'DESC',
      },
      relations: {
        sphoStock: {
          vendorProducts: { veproVendor: true },
        },
      },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.find({
      order: {
        sphoId: 'DESC',
      },
      where: {
        sphoStock: {
          stockId: id,
        },
      },
      // relations: { sphoStock: true },
    });
  }

  public async Upload(
    file: any,
    sphoPrimary: number,
    stockId: number,
    sphoUrl: string,
  ) {
    try {
      const photo = await this.serviceRepo.save({
        sphoThumbnailFilename: file.filename,
        sphoPhotoFilename: file.filename,
        sphoUrl: sphoUrl,
        sphoPrimary: sphoPrimary,
        sphoStock: {
          stockId: stockId,
        },
      });
      return photo;
    } catch (error) {
      return error.message;
    }
  }

  // public async Update(
  //   sphoId: number,
  //   file: any,
  //   sphoPrimary: number,
  //   stockId: number,
  //   sphoUrl: string,
  // ) {
  //   try {
  //     const stockPhoto = await this.serviceRepo.update(sphoId, {
  //       sphoThumbnailFilename: file.filename,
  //       sphoPhotoFilename: file.filename,
  //       sphoUrl: sphoUrl,
  //       sphoPrimary: sphoPrimary,
  //       sphoStock: {
  //         stockId: stockId,
  //       },
  //     });
  //     return stockPhoto;
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

  public async update(
    id: number,
    stockPhotoDetail: {
      sphoPrimary: number;
    },
  ) {
    try {
      const stockPhoto = await this.serviceRepo.update(id, {
        ...stockPhotoDetail,
      });
      return stockPhoto;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(sphoId: number) {
    try {
      const stockPhoto = await this.serviceRepo.delete(sphoId);
      return stockPhoto;
    } catch (error) {
      return error.message;
    }
  }
}
