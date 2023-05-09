import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'output/entities/Address';
import { Hotels } from 'output/entities/Hotels';
import { Repository } from 'typeorm';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotels) private hotelsRepo: Repository<Hotels>,
  ) {}

  public async findAll() {
    return await this.hotelsRepo.find({
      relations: {
        hotelAddr: true,
        hotelReviews: { horeUser: true },
        facilities: { faciCagro: true },
      },
      order: { facilities: { faciId: 1 } },
    });
  }

  public async findOne(id: number) {
    return await this.hotelsRepo.findOne({
      where: {
        hotelId: id,
      },
      relations: {
        hotelAddr: true,
      },
    });
  }

  public async Create(
    hotelName: string,
    hotelDescription: string,
    hotelRatingStar: number,
    hotelPhonenumber: string,
    hotelModifiedDate: Date = new Date(),
    hotelAdddr: Address,
  ) {
    try {
      const hotels = await this.hotelsRepo.save({
        hotelName: hotelName,
        hotelDescription: hotelDescription,
        hotelRatingStar: hotelRatingStar,
        hotelPhonenumber: hotelPhonenumber,
        hotelModifiedDate: hotelModifiedDate,
        hotelAdddr: hotelAdddr,
      });
      return hotels;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    hotelName: string,
    hotelDescription: string,
    hotelRatingStar: number,
    hotelPhonenumber: string,
    hotelModifiedDate: Date = new Date(),
    hotelAddr: Address,
  ) {
    try {
      const hotels = await this.hotelsRepo.update(id, {
        hotelName: hotelName,
        hotelDescription: hotelDescription,
        hotelRatingStar: hotelRatingStar,
        hotelPhonenumber: hotelPhonenumber,
        hotelModifiedDate: hotelModifiedDate,
        hotelAddr: hotelAddr,
      });
      return hotels;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const hotels = await this.hotelsRepo.delete(id);
      return hotels;
    } catch (error) {
      return error.message;
    }
  }
}
