import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelReviews } from 'output/entities/HotelReviews';
import { Repository } from 'typeorm';
import {
  createHotelReviewsDto,
  updateHotelReviewsDto,
} from './hotel-reviews.dto';

@Injectable()
export class HotelReviewsService {
  constructor(
    @InjectRepository(HotelReviews)
    private hotelReviewsRepo: Repository<HotelReviews>,
  ) {}

  public async findAll() {
    return await this.hotelReviewsRepo.find({
      relations: ['horeHotel', 'horeUser'],
    });
  }

  public async findOne(id: number) {
    return await this.hotelReviewsRepo.findOne({
      where: {
        horeId: id,
      },
      relations: ['horeHotel', 'horeUser'],
    });
  }

  public async Create(createHotelReviewsDto: createHotelReviewsDto) {
    try {
      return await this.hotelReviewsRepo.save(createHotelReviewsDto);
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    updateHotelReviewsDto: updateHotelReviewsDto,
  ) {
    try {
      return await this.hotelReviewsRepo.update(id, updateHotelReviewsDto);
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
