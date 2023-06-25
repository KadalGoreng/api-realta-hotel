import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotels } from 'output/entities/Hotels';
import { Repository } from 'typeorm';
import { CreateHotelsDto, UpdateHotelsDto } from './hotels.dto';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotels) private hotelsRepo: Repository<Hotels>,
  ) {}

  public async findAllData(
    options: IPaginationOptions,
    name: string,
  ): Promise<Pagination<Hotels>> {
    const queryBuilder = this.hotelsRepo
      .createQueryBuilder('c')
      .orderBy('c.hotelId', 'ASC')
      .innerJoinAndSelect('c.hotelAddr', 'hotelAddr')
      .where('c.hotelName ilike :hotelname', {
        hotelname: `%${name}%`,
      });
    return paginate<Hotels>(queryBuilder, options);
  }

  public async findAll() {
    return await this.hotelsRepo.find({
      relations: {
        hotelAddr: true,
        hotelReviews: { horeUser: true },
        facilities: { faciCagro: true, facilityPhotos: true },
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

  public async Create(createHotelsDto: CreateHotelsDto) {
    try {
      await this.hotelsRepo.save({
        ...createHotelsDto,
        hotelModifiedDate: new Date(),
      });
      return 'Hotel Created successfully';
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, updateHotelsDto: UpdateHotelsDto) {
    try {
      await this.hotelsRepo.update(id, {
        ...updateHotelsDto,
        hotelModifiedDate: new Date(),
      });
      return 'Hotel Update successfully';
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
