import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HotelReviewsService } from './hotel-reviews.service';

@Controller('/hotelReviews')
export class HotelReviewController {
  constructor(private ServicesHotelReviews: HotelReviewsService) {}

  @Get()
  public async getAll() {
    return await this.ServicesHotelReviews.findAll();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.ServicesHotelReviews.findOne(id);
  }

  @Post()
  public async Create(
    @Body('horeId') horeId,
    @Body('horeUserRiview') horeUserRiview: string,
    @Body('horeRating') horeRating: number,
    @Body('horeCreatedOn') horeCreatedOn: Date = new Date(),
    @Body('horeUserId') horeUser,
    @Body('horeHotelId') horeHotel,
  ) {
    return await this.ServicesHotelReviews.Create(
      horeId,
      horeUserRiview,
      horeRating,
      horeCreatedOn,
      horeUser,
      horeHotel,
    );
  }

  @Put('/:id')
  public async Update(
    @Param('id') id: number,
    @Body('horeUserRiview') horeUserRiview: string,
    @Body('horeRating') horeRating: number,
    @Body('horeCreatedOn') horeCreatedOn: Date = new Date(),
  ) {
    return await this.ServicesHotelReviews.Update(
      id,
      horeUserRiview,
      horeRating,
      horeCreatedOn,
    );
  }

  @Delete('/:id')
  public async Delete(@Param('id') id: string) {
    return await this.ServicesHotelReviews.Delete(id);
  }
}
