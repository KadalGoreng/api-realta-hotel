import { Hotels } from 'output/entities/Hotels';

export class CreateHotelReviewsDto {
  horeUserReview: string;
  horeRating: number;
  horeUserId: number;
  horeHotel: Hotels;
}

export class UpdateHotelReviewsDto {
  id: number;
  horeUserReview: string;
  horeRating: number;
  horeUserId: number;
  horeHotel: Hotels;
}
