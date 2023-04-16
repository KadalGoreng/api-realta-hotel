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
      relations: {
        sphoStock: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { sphoId: id },
      relations: { sphoStock: true },
    });
  }

  public async Create(
    sphoThumbnailFilename: string,
    sphoPhotoFilename: string,
    sphoPrimary: number,
    sphoUrl: string,
    sphoStock: Stocks,
  ) {
    try {
      const stockPhoto = await this.serviceRepo.save({
        sphoThumbnailFilename: sphoThumbnailFilename,
        sphoPhotoFilename: sphoPhotoFilename,
        sphoPrimary: sphoPrimary,
        sphoUrl: sphoUrl,
        sphoStock: sphoStock,
      });
      return stockPhoto;
    } catch (error) {
      return error.message;
    }
  }

  //   //   public async Update(id: number, name: string, description: string) {
  //   //     try {
  //   //       const prodCategory = await this.serviceRepo.update(id, {
  //   //         name: name,
  //   //         description: description,
  //   //         updatedat: new Date(),
  //   //       });
  //   //       return prodCategory;
  //   //     } catch (error) {
  //   //       return error.message;
  //   //     }
  //   //   }

  //   public async Delete(sphoId: number) {
  //     try {
  //       const stockPhoto = await this.serviceRepo.delete(sphoId);
  //       return stockPhoto;
  //     } catch (error) {
  //       return error.message;
  //     }
  //   }
}
