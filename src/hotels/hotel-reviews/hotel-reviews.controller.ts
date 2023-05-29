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
  public async Create(@Body() createHotelReviewsDto: any) {
    return await this.ServicesHotelReviews.Create(createHotelReviewsDto);
  }

  @Put('/:id')
  public async Update(
    @Param('id') id: number,
    @Body() updateHotelReviewsDto: any,
  ) {
    return await this.ServicesHotelReviews.Update(id, updateHotelReviewsDto);
  }

  @Delete('/:id')
  public async Delete(@Param('id') id: number) {
    return await this.ServicesHotelReviews.Delete(id);
  }
}
