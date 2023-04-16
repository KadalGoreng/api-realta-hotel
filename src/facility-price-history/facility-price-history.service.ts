import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FacilityPriceHistory } from 'output/entities/FacilityPriceHistory';
import { Repository } from 'typeorm';

@Injectable()
export class FacilityPriceHistoryService {
  constructor(
    @InjectRepository(FacilityPriceHistory)
    private facilityPriceHistoryRepo: Repository<FacilityPriceHistory>,
  ) {}

  public async findAll() {
    return await this.facilityPriceHistoryRepo.find({
      relations: {
        faphFaci: true,
        faphUser: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.facilityPriceHistoryRepo.findOne({
      where: {
        faphId: id,
      },
      relations: {
        faphFaci: true,
        faphUser: true,
      },
    });
  }

  public async Create(
    faphFaci,
    faphId,
    faphStartdate: Date = new Date(),
    faphEnddate: Date = new Date(),
    faphLowPrice: string,
    faphHighPrice: string,
    faphRatePrice: string,
    faphDiscount: string,
    faphTaxRate: string,
    faphModifiedDate: Date = new Date(),
    faphUser,
  ) {
    try {
      const facilityPriceHistory = await this.facilityPriceHistoryRepo.save({
        faphFaci: faphFaci,
        faphId: faphId,
        faphStartdate: faphStartdate,
        faphEnddate: faphEnddate,
        faphLowPrice: faphLowPrice,
        faphHighPrice: faphHighPrice,
        faphRatePrice: faphRatePrice,
        faphDiscount: faphDiscount,
        faphTaxRate: faphTaxRate,
        faphModifiedDate: faphModifiedDate,
        faphUser: faphUser,
      });
      return facilityPriceHistory;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    faphLowPrice: string,
    faphHighPrice: string,
    faphRatePrice: string,
    faphDiscount: string,
    faphTaxRate: string,
    faphModifiedDate: Date = new Date(),
  ) {
    try {
      const facilityPriceHistory = await this.facilityPriceHistoryRepo.update(
        id,
        {
          faphLowPrice: faphLowPrice,
          faphHighPrice: faphHighPrice,
          faphRatePrice: faphRatePrice,
          faphDiscount: faphDiscount,
          faphTaxRate: faphTaxRate,
          faphModifiedDate: faphModifiedDate,
        },
      );
      return facilityPriceHistory;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: string) {
    try {
      const facilityPriceHistory = await this.facilityPriceHistoryRepo.delete(
        id,
      );
      return facilityPriceHistory;
    } catch (error) {
      return error.message;
    }
  }
}
