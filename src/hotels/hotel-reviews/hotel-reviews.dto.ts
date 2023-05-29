import { Hotels } from 'output/entities/Hotels';

export class createHotelReviewsDto {
  horeUserReview: string;
  horeRating: number;
  horeCreatedOn: Date = new Date();
  horeUserId: number;
  horeHotel: Hotels;
}

export class updateHotelReviewsDto {
  id: number;
  horeUserReview: string;
  horeRating: number;
  horeUserId: number;
  horeCreatedOn: Date = new Date();
  horeHotel: Hotels;
}
