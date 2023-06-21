import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelReviews } from 'output/entities/HotelReviews';
import { Repository } from 'typeorm';

@Injectable()
export class HotelReviewsService {
  constructor(
    @InjectRepository(HotelReviews)
    private hotelReviewsRepo: Repository<HotelReviews>,
  ) {}

  public async findAll(id: number) {
    if (id !== undefined) {
      return await this.hotelReviewsRepo.find({
        where: {
          horeHotel: { hotelId: id },
        },
        relations: {
          horeHotel: true,
          horeUser: true,
        },
      });
    } else {
      return await this.hotelReviewsRepo.find({
        relations: {
          horeHotel: true,
          horeUser: true,
        },
      });
    }
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

  public async Create(
    horeId,
    horeUserReview: string,
    horeRating: number,
    horeCreatedOn: Date = new Date(),
    horeUser,
    horeHotel,
  ) {
    try {
      const hotelReviews = await this.hotelReviewsRepo.save({
        horeId: horeId,
        horeUserReview: horeUserReview,
        horeRating: horeRating,
        horeCreatedOn: horeCreatedOn,
        horeUser: horeUser,
        horeHotel: horeHotel,
      });
      return hotelReviews;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    horeUserReview: string,
    horeRating: number,
    horeCreatedOn: Date = new Date(),
  ) {
    try {
      const hotelReviews = await this.hotelReviewsRepo.update(id, {
        horeUserReview: horeUserReview,
        horeRating: horeRating,
        horeCreatedOn: horeCreatedOn,
      });
      return hotelReviews;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: string) {
    try {
      const hotelReviews = await this.hotelReviewsRepo.delete(id);
      return hotelReviews;
    } catch (error) {
      return error.message;
    }
  }
}
