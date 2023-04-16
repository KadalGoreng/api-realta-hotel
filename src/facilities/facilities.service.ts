import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Facilities } from 'output/entities/Facilities';
import { Repository } from 'typeorm';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectRepository(Facilities)
    private facilitiesRepo: Repository<Facilities>,
  ) {}

  public async findAll() {
    return await this.facilitiesRepo.find({
      relations: {
        faciCagro: true,
        faciHotel: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.facilitiesRepo.findOne({
      where: {
        faciId: id,
      },
      relations: {
        faciCagro: true,
        faciHotel: true,
      },
    });
  }

  public async Create(
    faciId,
    faciName: string,
    faciMaxNumber: number,
    faciMeasureUnit: string,
    faciRoomNumber: string,
    faciStartdate: Date = new Date(),
    faciEnddate: Date = new Date(),
    faciLowPrice: string,
    faciHighPrice: string,
    faciDiscount: string,
    faciTaxRate: string,
    faciModifiedDate: Date = new Date(),
    faciRatePrice: string,
    faciCagro,
    faciHotel,
  ) {
    try {
      const hotels = await this.facilitiesRepo.save({
        faciId: faciId,
        faciName: faciName,
        faciMaxNumber: faciMaxNumber,
        faciMeasureUnit: faciMeasureUnit,
        faciRoomNumber: faciRoomNumber,
        faciStartdate: faciStartdate,
        faciEnddate: faciEnddate,
        faciLowPrice: faciLowPrice,
        faciHighPrice: faciHighPrice,
        faciRatePrice: faciRatePrice,
        faciDiscount: faciDiscount,
        faciTaxRate: faciTaxRate,
        faciModifiedDate: faciModifiedDate,
        faciCagro: faciCagro,
        faciHotel: faciHotel,
      });
      return hotels;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    faciName: string,
    faciMaxNumber: number,
    faciMeasureUnit: string,
    faciRoomNumber: string,
    faciStartdate: Date = new Date(),
    faciEnddate: Date = new Date(),
    faciLowPrice: string,
    faciHighPrice: string,
    faciDiscount: string,
    faciTaxRate: string,
    faciModifiedDate: Date = new Date(),
    faciCagro,
    faciHotel,
  ) {
    try {
      const hotels = await this.facilitiesRepo.update(id, {
        faciName: faciName,
        faciMaxNumber: faciMaxNumber,
        faciMeasureUnit: faciMeasureUnit,
        faciRoomNumber: faciRoomNumber,
        faciStartdate: faciStartdate,
        faciEnddate: faciEnddate,
        faciLowPrice: faciLowPrice,
        faciHighPrice: faciHighPrice,
        faciDiscount: faciDiscount,
        faciTaxRate: faciTaxRate,
        faciModifiedDate: faciModifiedDate,
        faciCagro: faciCagro,
        faciHotel: faciHotel,
      });
      return hotels;
    } catch (error) {
      return error.message;
    }
  }
  public async Delete(id: string) {
    try {
      const hotels = await this.facilitiesRepo.delete(id);
      return hotels;
    } catch (error) {
      return error.message;
    }
  }
}
