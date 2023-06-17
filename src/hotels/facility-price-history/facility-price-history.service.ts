import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FacilityPriceHistory } from 'output/entities/FacilityPriceHistory';
import { Repository } from 'typeorm';
import {
  CreateFacilityPriceHistoryDto,
  UpdateFacilityPriceHistoryDto,
} from './facility-price-history.dto';

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
    createFacilityPriceHistoryDto: CreateFacilityPriceHistoryDto,
  ) {
    try {
      return await this.facilityPriceHistoryRepo.save({
        ...createFacilityPriceHistoryDto,
        faphModifiedDate: new Date(),
      });
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    updateFacilityPriceHistoryDto: UpdateFacilityPriceHistoryDto,
  ) {
    try {
      return await this.facilityPriceHistoryRepo.update(id, {
        ...updateFacilityPriceHistoryDto,
        faphModifiedDate: new Date(),
      });
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
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
