import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelReviews } from 'output/entities/HotelReviews';
import { Repository } from 'typeorm';
import {
  CreateHotelReviewsDto,
  UpdateHotelReviewsDto,
} from './hotel-reviews.dto';

@Injectable()
export class HotelReviewsService {
  constructor(
    @InjectRepository(HotelReviews)
    private hotelReviewsRepo: Repository<HotelReviews>,
  ) {}

  public async findAll() {
    return await this.hotelReviewsRepo.find({
      relations: {
        horeHotel: true,
        horeUser: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.hotelReviewsRepo.findOne({
      where: {
        horeId: id,
      },
      relations: {
        horeHotel: true,
        horeUser: true,
      },
    });
  }

  public async Create(createHotelReviewsDto: CreateHotelReviewsDto) {
    try {
      return await this.hotelReviewsRepo.save({
        ...createHotelReviewsDto,
        horeCreatedOn: new Date(),
      });
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    updateHotelReviewsDto: UpdateHotelReviewsDto,
  ) {
    try {
      return await this.hotelReviewsRepo.update(id, {
        ...updateHotelReviewsDto,
        horeCreatedOn: new Date(),
      });
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const hotelReviews = await this.hotelReviewsRepo.delete(id);
      return hotelReviews;
    } catch (error) {
      return error.message;
    }
  }
}
